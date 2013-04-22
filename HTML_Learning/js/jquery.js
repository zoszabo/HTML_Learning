 $(function() {
  // $(':regex(id,^draggable.*$)').draggable();
  $( "#draggable" ).draggable();
  $( "#draggable_scroll" ).draggable({ scroll: true });
  $( "#draggable_scroll2" ).draggable({ scroll: true, scrollSensitivity: 10 });
  $( "#draggable_scroll3" ).draggable({ scroll: true, scrollSpeed: 1000 });
  $( "#draggable_vertical" ).draggable({ axis: "y" });
  $( "#draggable_horizontal" ).draggable({ axis: "x" });
  $( "#draggable_within_box" ).draggable({ containment: "#containment-wrapper", scroll: false });
  $( "#draggable_within_parent" ).draggable({ containment: "parent" });
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
      .addClass( "ui-state-highlight" )
      .find( "p" )
      .html( "Dropped!" );
    }
  });
  $( "#resizable" ).resizable();
  $( "#selectable" ).selectable();
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
  $( "#accordion" ).accordion();
});