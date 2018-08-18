var clusters=["BDC","SDC","UP_BUILD","RB_BUILD","NBC","NBV"];
var products=["MSRBS","EMSRBSC2","VRAN","VTF","NR","BASEBAND-T", "VeRC"];

//dummy data
nodes_PFV=nodes();
edges_PFV=edges();





  // Set up zoom support
  var svg = d3.select("svg"),
      inner = svg.select("g"),
      zoom = d3.zoom().on("zoom", function() {
        inner.attr("transform", d3.event.transform);
      });
  svg.call(zoom);

  var render = new dagreD3.render();

  // Left-to-right layout
  var g = new dagreD3.graphlib.Graph({compound: true});
  g.setGraph({
    nodesep: 50,
    ranksep: 70,
    rankdir: "LR",
    marginx: 20,
    marginy: 20
  });

  function draw(isUpdate) {
    //groups
    g.setNode('SDC', {label: 'SDC', clusterLabelPos: 'top', style: 'fill: #ffd47f'});
    g.setNode('BDC', {label: 'BDC',clusterLabelPos: 'top', style: 'fill: #5f9488'});
    g.setNode('UP_BUILD', {label: 'UP_BUILD', clusterLabelPos: 'top', style: 'fill: #ffd47f'});
    g.setNode('RB_BUILD', {label: 'RB_BUILD',clusterLabelPos: 'top', style: 'fill: #5f9488'});
    g.setNode('NBC', {label: 'NBC', clusterLabelPos: 'top', style: 'fill: #ffd47f'});
    g.setNode('NBV', {label: 'NBV',clusterLabelPos: 'top', style: 'fill: #5f9488'});

    //nodes
    for (var id in nodes_PFV) {
      var event = nodes_PFV[id];
      var status_arr=["success", "unstable", "fail"];
      var rx,ry;
      var status=status_arr[Math.floor(Math.random()*3)];
      var className = status;
      // if (status=="fail") {
      //   className += " warn";
      // }
      className += " clickable";
      if(event.name.includes("SOURCE")) {className+=" source"; rx=880; ry=880;  }
      else {rx=5; ry=5;}
      for(var prod=0;prod<products.length;prod++){
        if(event.product.includes(products[prod])) {className+=" "+products[prod];}
      }
       var html = "<div>";
      html += "<span class=\"status\"></span>";
      html += "<div class=\"name\">"+event.name+"</div>";
    //  html += "<span class=queue>"+event.CL+"</span>";
      html += "</div>";
      g.setNode(event.key, {
        labelType: "html",
        label: html,
        rx: rx,
        ry: ry,
        padding: 0,
        class: className,
        shape: "rect"
      });

      //Setting the clusters for alignment
      for(var cluster=0;cluster<clusters.length;cluster++){
        if(event.name.includes(clusters[cluster])){
          g.setParent(event.key, clusters[cluster]);
          break;
        }
      }

    }

    //edges
    for (var id in edges_PFV){
      var edge=edges_PFV[id];
      var className="";
      for(var prod=0;prod<products.length;prod++){
        if(nodes_PFV[edge.from].product.includes(products[prod]) && nodes_PFV[edge.to].product.includes(products[prod]))
          className+=" "+products[prod];
      }
      var html='<div class=\"edgeLabelText'+className+'\"><text>'+Math.ceil(Math.random()*100)+' min'+'</text></div>';
      g.setEdge(edge.from,edge.to,{
         labelType: "html",
         label: html,
         width:40,
         curve: d3.curveBasis,
         class: className
       });
    }

    inner.call(render, g);


    // Zoom and scale to fit
    var graphWidth = g.graph().width + 80;
    var graphHeight = g.graph().height + 40;
    var width = parseInt(svg.style("width").replace(/px/, ""));
    var height = parseInt(svg.style("height").replace(/px/, ""));
    var zoomScale = Math.min(width / graphWidth, height / graphHeight);
    var translateX = (width / 2) - ((graphWidth * zoomScale) / 2)
    var translateY = (height / 2) - ((graphHeight * zoomScale) / 2);
    console.log(translateX+","+translateY+","+zoomScale);
    var svgZoom = isUpdate ? svg.transition().duration(500) : svg;
    svgZoom.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(zoomScale));
  }


  document.addEventListener("DOMContentLoaded", draw);