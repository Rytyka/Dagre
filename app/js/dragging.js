//code for drag

//give IDs to each of the nodes so that they can be accessed
svg.selectAll("g.node rect")
    .attr("id", function (d) {
    return "node" + d;
});
svg.selectAll("g.edgePath path")
    .attr("id", function (e) {
    return e.v + "-" + e.w;
})
g.nodes().forEach(function (v) {
    var node = g.node(v);
    node.customId = "node" + v;
})
g.edges().forEach(function (e) {
    var edge = g.edge(e.v, e.w);
    edge.customId = e.v + "-" + e.w
});


var nodeDrag = d3.drag()
    .on("start", dragstart)
    .on("drag", dragmove);

var edgeDrag = d3.drag()
    .on("start", dragstart)
    .on('drag', function (d) {
    translateEdge(g.edge(d.v, d.w), d3.event.dx, d3.event.dy);
    $('#' + g.edge(d.v, d.w).customId).attr('d', calcPoints(d));
});
svg.selectAll("g.node").call(nodeDrag);
svg.selectAll("g.edgePath").call(edgeDrag);
//nodeDrag.call(svg.selectAll("g.node"));
//edgeDrag.call(svg.selectAll("g.edgePath"));

function dragstart(d) {
    d3.event.sourceEvent.stopPropagation();
}

function dragmove(d) {
    var node = d3.select(this),
        selectedNode = g.node(d);
    var prevX = selectedNode.x,
        prevY = selectedNode.y;

    selectedNode.x += d3.event.dx;
    selectedNode.y += d3.event.dy;
    node.attr('transform', 'translate(' + selectedNode.x + ',' + selectedNode.y + ')');

    var dx = selectedNode.x - prevX,
        dy = selectedNode.y - prevY;

    g.edges().forEach(function (e) {
        if (e.v == d || e.w == d) {
            edge = g.edge(e.v, e.w);
            translateEdge(g.edge(e.v, e.w), dx, dy);
            $('#' + edge.customId).attr('d', calcPoints(e));
        }
    })
}


function translateEdge(e, dx, dy) {
    e.points.forEach(function (p) {
        p.x = p.x + dx;
        p.y = p.y + dy;
    });
}

//taken from dagre-d3 source code (not the exact same)
function calcPoints(e) {
    var edge = g.edge(e.v, e.w),
        tail = g.node(e.v),
        head = g.node(e.w);
    var points = edge.points.slice(1, edge.points.length - 1);
    var afterslice = edge.points.slice(1, edge.points.length - 1)
    points.unshift(intersectRect(tail, points[0]));
    points.push(intersectRect(head, points[points.length - 1]));
    return d3.svg.line()
        .x(function (d) {
        return d.x;
    })
        .y(function (d) {
        return d.y;
    })
        .interpolate("basis")
    (points);
}

//taken from dagre-d3 source code (not the exact same)
function intersectRect(node, point) {
    var x = node.x;
    var y = node.y;
    var dx = point.x - x;
    var dy = point.y - y;
    var w = $("#" + node.customId).attr('width') / 2;
    var h = $("#" + node.customId).attr('height') / 2;
    var sx = 0,
        sy = 0;
    if (Math.abs(dy) * w > Math.abs(dx) * h) {
        // Intersection is top or bottom of rect.
        if (dy < 0) {
            h = -h;
        }
        sx = dy === 0 ? 0 : h * dx / dy;
        sy = h;
    } else {
        // Intersection is left or right of rect.
        if (dx < 0) {
            w = -w;
        }
        sx = w;
        sy = dx === 0 ? 0 : w * dy / dx;
    }
    return {
        x: x + sx,
        y: y + sy
    };
}