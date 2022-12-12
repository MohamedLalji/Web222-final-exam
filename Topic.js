/*
 * WEB222 – Final Exam
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 *      Name:       Mohamed Lalji
 *      Student ID: Your ID
 *      Date:       2022-12-05
 */

function otherTopic() {
  var topic = document.getElementById("other_topic");

  if (document.getElementById("other").checked) {
    topic.style.display = "inline";
  } else {
    topic.style.display = "none";
  }
}
