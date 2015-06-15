$(document).ready(function () {
  $( "form" ).submit(function( event ) {
  event.preventDefault();
  })
  var newLi = function() {
    $('#items1 ol').append('<li><span></span></li>');
  };
  /*
  var newDt = function() {
      $('#items2 dl').append('<dt><span></span></dt>');
  };

  var newDd = function() {
      $('#items2 dl').append('<dd><span></span></dd>');
  }
  */
  //makes a new editor
  var makeEditor = function(data) {
    var editor = $('<input id="item-name" type="text" placeholder="Item...">');
    editor.prop('value', data);
    return editor;
  };
  
  
  var newItem = function() {
    var item = $('<li></li>');  
    var editor = makeEditor();
    editor.on('keyup', newItemHandler);
    item.append(editor);
    $('#items2').append(item);
  };

  var reAddEditor = function() {
    var data = $(this).text();
    var editor = makeEditor(data);
    editor.on('keyup', existingItemHandler);
    $(this).replaceWith(editor);
    editor.focus();
  };
  
  var staticName = function() {
    return $('<h3></h3>');
  };
  
  var existingItemHandler = function(event) {
    var data = $(this).val();
      console.log("1 item:", data);
      if (event.which === 13) {
        console.log("2 enter key");
        event.preventDefault();
        if (data.length === 0) {
          console.log("false");
          alert("Please type in an item!");
          return;
        }

        var item_name = staticName();
        item_name.on('click', reAddEditor);
        item_name.text(data);
        $(this).replaceWith(item_name);
        //$('#items2 input:last').append(newXbutton());
        /*
        $('#items2 dd:last').append(newXbutton());
        newDt();
        newDd();
        $('#submit-box2').val(''); 
      } else {
          $('#items2 dd:last span').text(item);
      }
      */  
          $('#item-name').val(''); 
      } else {
          $('#items2 h3:last').append(item_name);
      }
  };

  var newItemHandler = function(event) {
    var data = $(this).val();
    console.log("1 item:", data);
    if (event.which === 13) {
      console.log("2 enter key");
      event.preventDefault();
      if (data.length === 0) {
        console.log("false");
        alert("Please type in an item!");
        return;
      }

      var item_name = staticName();
      item_name.on('click', reAddEditor);
      item_name.text(data);
      $(this).replaceWith(item_name);
      newItem();
      //$('#items2 input:last').append(newXbutton());
      /*
      $('#items2 dd:last').append(newXbutton());
      newDt();
      newDd();
      $('#submit-box2').val(''); 
    } else {
        $('#items2 dd:last span').text(item);
    }
    */  
        $('#item-name').val(''); 
    } else {
        $('#items2 h3:last').append(item_name);
    }
  };
    
  newItem();
  newLi();
  //newDt();
  //newDd();    

  var newXbutton = function() {
    var x = $('<i class="fa fa-times"></i>');
    x.click(function() {          
      $(this).parent().remove();
      console.log('6 remove');
    })
    return x;
  };

  $('#submit-box1').on('keyup', function(event) {
    var item = $('#submit-box1').val();
    console.log("1 item:", item);
    if (event.which === 13) {
      console.log("2 enter key");
      event.preventDefault();
      if (item.length >= 1) {
        console.log("3 true");
        var rightArrow = $('<i class="fa fa-arrow-right"></i>');
        //var xButton = newXbutton();
        $('#items1 li:last').append(rightArrow, newXbutton());
        newLi();
        console.log('4 newli');
        rightArrow.click(function() {
          var content = $(this).parent().text();
          console.log('8 content:', content);
          var move = $('#items2 dt:last span').text(content);
          console.log('9 move right:', move);
          var addX = $('#items2 dt:last').append(newXbutton());
          console.log('10 append x:', addX);
          newDt();
        })
        $('#submit-box1').val('');
      } else {
          console.log("false");
          alert("Please type in an item!");
      }
    } else {
        $('#items1 li:last span').text(item);
    }
  })

  $('#items1').on('click', 'li span', function() {
      $(this).toggleClass('crossout');
  })

  /*
  $('#add-category').on('keyup', function(event) {
      var newCategory = $(this).val();
      //var categoryItem = $('#add-category').val();
      if (event.which === 13) {
          console.log("2 enter key");
          event.preventDefault();
          if (newCategory.length === 0) {
              console.log("false");
              alert("Please type in a category!");
              return;
          }
          var newOption = $('<option><span></span></option>');
          newOption.attr('value', newCategory);
          newOption.text(newCategory);
          $('#category').append(newOption);
          //$('#category span').text(newCategory);
          $('#items2 dt:last').append(newXbutton());
          newDt();
          $('#add-category').val('');
      } else {
          $('#items2 dt:last span').text(newCategory);
      }
  })
  */
  /*
  var emptyShoppingList = function() {
      var trashShoppingList = $('#trash1');
      console.log(trashShoppingList);
      trashShoppingList.click(function() {
          $('#items1 ol').empty();
          newLi();
      });
  }
  var emptyInventory = function() {
      var trashInventory = $('#trash2');
      console.log(trashInventory);
      trashInventory.click(function() {
          $('#items2 dl').empty();
          newDt();
      });
  }
  emptyShoppingList();
  emptyInventory();
  */
});