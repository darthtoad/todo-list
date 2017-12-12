var count = -1;
//
function Todo(task, date, description) {
  this.task = task;
  this.date = date;
  this.description = description;
  count += 1;
  this.number = count;
}

Todo.prototype.listTodo = function() {
  return this.task + "<br>" + this.date + "<br>" + this.description
}

/*function crossout() {
  count += 1;
}*/

$(document).ready(function() {
  $("form#theform").submit(function(event) {
    event.preventDefault();

    var task = $("input#task").val();
    var date = $("input#date").val();
    var description = $("input#description").val();
    console.log(task);
    var newTodo = new Todo(task, date, description);
    var todoArray = [];
    todoArray.push(newTodo);
    console.log(newTodo);

    $("#output").append("<li id=" + newTodo.task + "><span class='stuff'" +/* id=" + newTodo.number + */">" + newTodo.task + "</span></li>");
    //console.log(newTodo.number);

    $(".stuff").last().click(function() {
      console.log("thing");
      $(".todolist").show();
      $("#output #taskname").text(newTodo.task);
      $("#output #dateoutput").text(newTodo.date);
      $("#output #descriptionoutput").text(newTodo.description);
    });

    $("#arg").click(function(event) {
      debugger;
      event.preventDefault();
      console.log("agrjio");
      var itemForRemoval = $("input#removeTask").val();
      console.log(itemForRemoval)
      todoArray.forEach(function(element){
        console.log("Element is" + element.task);
        if (element.task == itemForRemoval) {
          console.log("evaluated");
          $("#" + itemForRemoval).remove();
          $(".todolist").hide();
        } else {
          console.log("not evaluated");
        }
      })
      //console.log(newTodo.number);
      // $(".todolist" + "#" + task).hide();
      // $("#descriptionoutput" + "#" + task).toggleClass("crossout");
      // $("h2" + "#" + task).toggleClass("crossout");
      // $("#dateoutput" + "#" + task).toggleClass("crossout");
      // $(".todolist" + "#" + task).show();
    })

    $("input#task").val("");
    $("input#date").val("");
    $("input#description").val("");
  })
})
