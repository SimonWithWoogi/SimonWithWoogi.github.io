/*
 * Tab 'Categories' expand/close effect.
<<<<<<< HEAD
 * v2.0
 * https://github.com/cotes2020/jekyll-theme-chirpy
 * © 2018-2019 Cotes Chung
 * MIT License
 */

$(function() {
  var childPrefix = "l_";
  var parentPrefix = "h_";

  /* close up top-category */
  $(".collapse").on("hide.bs.collapse", function() { /* Bootstrap collapse events. */
    var parentId = parentPrefix + $(this).attr("id").substring(childPrefix.length);
    if (parentId) {
      $("#" + parentId + " .far.fa-folder-open").attr("class", "far fa-folder fa-fw");
      $("#" + parentId + " i.fas").addClass("rotate");
      $("#" + parentId).removeClass("hide-border-bottom");
=======
 */

$(function() {
  const childPrefix = "l_";
  const parentPrefix = "h_";
  const collapse = $(".collapse");

  /* close up top-category */
  collapse.on("hide.bs.collapse", function () { /* Bootstrap collapse events. */
    const parentId = parentPrefix + $(this).attr("id").substring(childPrefix.length);
    if (parentId) {
      $(`#${parentId} .far.fa-folder-open`).attr("class", "far fa-folder fa-fw");
      $(`#${parentId} i.fas`).addClass("rotate");
      $(`#${parentId}`).removeClass("hide-border-bottom");
>>>>>>> 28fb78ad876485cc0a7120c304a1151bc72e5413
    }
  });

  /* expand the top category */
<<<<<<< HEAD
  $(".collapse").on("show.bs.collapse", function() {
    var parentId = parentPrefix + $(this).attr("id").substring(childPrefix.length);
    if (parentId) {
      $("#" + parentId + " .far.fa-folder").attr("class", "far fa-folder-open fa-fw");
      $("#" + parentId + " i.fas").removeClass("rotate");
      $("#" + parentId).addClass("hide-border-bottom");
    }
  });

});
=======
  collapse.on("show.bs.collapse", function() {
    const parentId = parentPrefix + $(this).attr("id").substring(childPrefix.length);
    if (parentId) {
      $(`#${parentId} .far.fa-folder`).attr("class", "far fa-folder-open fa-fw");
      $(`#${parentId} i.fas`).removeClass("rotate");
      $(`#${parentId}`).addClass("hide-border-bottom");
    }
  });

});
>>>>>>> 28fb78ad876485cc0a7120c304a1151bc72e5413
