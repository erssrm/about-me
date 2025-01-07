// training.js
var margin = { top: 20, right: 120, bottom: 20, left: 100 },
    width = 950 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root;

var tree = d3.layout.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function (d) { return [d.y, d.x]; });

var svg = d3.select("#tree").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class", "graph-svg-component")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;

update(root);

d3.select(self.frameElement).style("height", "800px");

function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) { d.y = d.depth * 180; });

    // Update the nodesâ€¦
    var node = svg.selectAll("g.node")
        .data(nodes, function (d) { return d.id || (d.id = ++i); });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on("click", click);

    nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", function (d) { return d._children ? "#ccff99" : "#fff"; });

    nodeEnter.append("text")
        .attr("x", function (d) { return d.children || d._children ? -13 : 13; })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
        .text(function (d) { return d.name; })
        .style("fill-opacity", 1e-6)
        .attr("class", function (d) {
            if (d.url != null) { return 'hyper'; }
        })
        .on("click", function (d) {
            var innerNode = function () {
                var li = "";
                if (d.data.length) {
                    d.data.forEachs((val) => {
                        li = li.concat(`<li>${val}<li>`);
                    })
                }
                return li;
            }
            var htmlTemplate = `<div>
            <h3>${'title'}</h3>
            <img src=""></img>
             <ul>
                ${innerNode()}
             </ul>
            </div>`
            $('.hyper').attr('style', 'font-weight:normal');
            d3.select(this).attr('style', 'font-weight:bold');
            if (d.url != null) {
                //  window.location=d.url; 
                $('#vid').remove();
                $('#vid-container').append($('<div>')
                    .attr('id', 'vid')
                    .attr('width', "100%")
                    .attr('height', "100%")
                    .html(htmlTemplate)
                )
            }
        })
        ;

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
        .attr("r", 10)
        .style("fill", function (d) { return d._children ? "#ccff99" : "#fff"; });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
        .remove();

    nodeExit.select("circle")
        .attr("r", 1e-6);

    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    // Update the linksâ€¦
    var link = svg.selectAll("path.link")
        .data(links, function (d) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = { x: source.x0, y: source.y0 };
            return diagonal({ source: o, target: o });
        });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return diagonal({ source: o, target: o });
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

// Toggle children on click.
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else if (d._children) {
        d.children = d._children;
        d._children = null;
    } else {
        showPopup(d);
    }
    update(d);
}

function showPopup(d) {
    var popup = document.getElementById("popup");
    var popupDetails = document.getElementById("popup-details");
    var closeBtn = document.getElementsByClassName("close")[0];

    // Clear previous details
    popupDetails.innerHTML = "";

    // Add node details
    var title = document.createElement("h3");
    title.textContent = d.name;
    popupDetails.appendChild(title);

    // Add duration and link
    if (d.duration || d.link) {
        var infoDiv = document.createElement("h5");
        infoDiv.style.display = "flex";
        infoDiv.style.justifyContent = "space-between";
        infoDiv.style.alignItems = "center";

        if (d.duration) {
            var duration = document.createElement("span");
            duration.textContent = d.duration;
            infoDiv.appendChild(duration);
        }

        if (d.link) {
            var link = document.createElement("a");
            link.href = d.link;
            link.textContent = "Link";
            link.target = "_blank";
            infoDiv.appendChild(link);
        }

        popupDetails.appendChild(infoDiv);
    }

    // Add details
    if (d.details) {
        var details = document.createElement("p");
        details.style.width = "100%";

        //if d.details type is array the loop through the array and add the details in the list
        if (Array.isArray(d.details)) {
            var ul = document.createElement("ul");
            d.details.forEach(function (detail) {
                var li = document.createElement("li");
                li.textContent = detail;
                ul.appendChild(li);
            });
            details.appendChild(ul);
        } else {
            details.textContent = d.details;
        }

        popupDetails.appendChild(details);
    }

    // Add technology used and images
    if (d.data || d.images) {
        var container = document.createElement("div");
        container.style.display = "flex";
        container.style.justifyContent = "space-between";

        if (d.data) {
            var techDiv = document.createElement("div");
            var techHeading = document.createElement("h4");
            //Based on the data type we can change the heading
            techHeading.textContent = getDataListHeading(d) 
            techDiv.appendChild(techHeading);

            var ul = document.createElement("ul");
            d.data.forEach(function (tech) {
                var li = document.createElement("li");
                li.textContent = tech;
                ul.appendChild(li);
            });
            techDiv.appendChild(ul);
            container.appendChild(techDiv);
        }

        if (d.images) {
            var imgDiv = document.createElement("div");
            var imgHeading = document.createElement("h4");
            imgHeading.textContent = "Images";
            imgDiv.appendChild(imgHeading);

            d.images.forEach(function (imgSrc, index) {
                var img = document.createElement("img");
                img.src = imgSrc;
                img.style.width = "100px";
                img.style.height = "auto";
                img.style.margin = "5px";
                img.style.cursor = "pointer";
                img.onclick = function () {
                    showImageGallery(d.images, index);
                };
                imgDiv.appendChild(img);
            });

            container.appendChild(imgDiv);
        }

        popupDetails.appendChild(container);
    }

    // Show the popup
    popup.style.display = "block";

    // Close the popup when the user clicks on <span> (x)
    closeBtn.onclick = function () {
        popup.style.display = "none";
    };

    // Close the popup when the user clicks anywhere outside of the popup
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    };
}

//Function to change the heading based on the parent type
function getDataListHeading(data) {
    const headings = {
        Projects: "Technology Used",
        Education: "Courses",
        Experience: "Skills",
        Skills: "Tools",
    };

    return headings[data.parent.name] || "";
}

function showImageGallery(images, startIndex) {
    var galleryPopup = document.createElement("div");
    galleryPopup.id = "gallery-popup";
    galleryPopup.style.position = "fixed";
    galleryPopup.style.top = "0";
    galleryPopup.style.left = "0";
    galleryPopup.style.width = "100%";
    galleryPopup.style.height = "100%";
    galleryPopup.style.backgroundColor = "rgba(255,255,255,0.8)";
    galleryPopup.style.display = "flex";
    galleryPopup.style.justifyContent = "center";
    galleryPopup.style.alignItems = "center";
    galleryPopup.style.zIndex = "5000";

    var imgIndex = startIndex;

    var imgContainer = document.createElement("div");
    imgContainer.style.position = "relative";

    var img = document.createElement("img");
    img.src = images[imgIndex];
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    imgContainer.appendChild(img);

    var prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous";
    prevBtn.style.position = "absolute";
    prevBtn.style.top = "50%";
    prevBtn.style.left = "0";
    prevBtn.style.transform = "translateY(-50%)";
    prevBtn.style.backgroundColor = "rgba(255,255,255,0.5)";
    prevBtn.onclick = function () {
        imgIndex = (imgIndex - 1 + images.length) % images.length;
        img.src = images[imgIndex];
    };

    var nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.style.position = "absolute";
    nextBtn.style.top = "50%";
    nextBtn.style.right = "0";
    nextBtn.style.transform = "translateY(-50%)";
    nextBtn.style.backgroundColor = "rgba(255,255,255,0.5)";
    nextBtn.onclick = function () {
        imgIndex = (imgIndex + 1) % images.length;
        img.src = images[imgIndex];
    };

    var closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "10px";
    closeBtn.style.right = "20px";
    closeBtn.style.cursor = "pointer";
    closeBtn.onclick = function () {
        document.body.removeChild(galleryPopup);
    };

    imgContainer.appendChild(prevBtn);
    imgContainer.appendChild(nextBtn);
    galleryPopup.appendChild(imgContainer);
    galleryPopup.appendChild(closeBtn);
    document.body.appendChild(galleryPopup);
}