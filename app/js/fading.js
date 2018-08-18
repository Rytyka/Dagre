  //selecting based on solution, fading the rest

    $(document).ready(function(){
    $('#All').click(function(){
    $(".edgePath, .edgeLabelText, .node").fadeTo("slow",1);
       });

    $('#MSRBS').click(function(){
     $(".edgePath, .edgeLabelText, .node").not(".MSRBS").fadeTo("slow",0.15);
     $(".edgePath.MSRBS, .edgeLabelText.MSRBS, .node.MSRBS").fadeTo("slow",1);
       });

    $('#NR').click(function(){
     $(".edgePath, .edgeLabelText, .node").not(".NR").fadeTo("slow",0.15);
     $(".edgePath.NR, .edgeLabelText.NR, .node.NR").fadeTo("slow",1);

       });

    $('#BASEBAND-T').click(function(){
     $(".edgePath, .edgeLabelText, .node").not(".BASEBAND-T").fadeTo("slow",0.15);
     $(".edgePath.BASEBAND-T, .edgeLabelText.BASEBAND-T, .node.BASEBAND-T").fadeTo("slow",1);
       });

        $('#VeRC').click(function(){
      $(".edgePath, .edgeLabelText, .node").not(".VeRC").fadeTo("slow",0.15);
      $(".edgePath.VeRC, .edgeLabelText.VeRC, .node.VeRC").fadeTo("slow",1);

       });

      });


    //Add class method
/*    $(".edgePath, .edgeLabel, .node").removeClass('fading');
    $(".edgePath, .edgeLabel, .node").not(".NR").addClass('fading');*/

    //CSS opacity method
/*     $(".edgePath, .edgeLabel, .node").css("opacity","1");
     $(".edgePath, .edgeLabel, .node").not(".VeRC").css("opacity","0.1");*/