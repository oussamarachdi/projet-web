function addComment(){
    var commentInput = document.getElementById("comment");
    var commentText = commentInput.value;

    if(commentText.trim() !== ""){
        var comments = JSON.parse(localStorage.getItem("comments")) || [];

        // add the new comment to  the array
        comments.push(commentText);

        // save commments back to local storage
        localStorage.setItem("comments", JSON.stringify(comments));

        commentInput.value = "";

        // Update the comment section
        updateCommentSection();

    }else{
        document.write('<center><p style="color:red; font-size:24px">Votre commentaire est erroné. Svp, retournez à la page et ajoutez un nouveau commentaire qui est valide.<p></center>')
    }
}

function updateCommentSection(){
    var commentSection = document.getElementById("commentSection");

    // Clear existing content
    commentSection.innerHTML = "";

    //Reitieve comments from local storage 
    var comments = JSON.parse(localStorage.getItem("comments")) || [];

    // Display Comments
    if(comments.length > 0){
        var ulElement = document.createElement("ul");

        for(var i=0; i < comments.length ; i++){
            var liElement = document.createElement("li");
            liElement.textContent = comments[i];
            ulElement.appendChild(liElement);
        }
        commentSection.appendChild(ulElement)
    }

    
}

updateCommentSection();

