function searchResume() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resumeContent = document.getElementById('resumeContent');
    const content = resumeContent.innerText.toLowerCase();

    // Remove previous highlights
    resumeContent.innerHTML = resumeContent.innerHTML.replace(/<span class="highlight">|<\/span>/g, '');

    if (searchTerm.trim() === "") {
        alert("Please enter a search term.");
        return;
    }

    if (content.includes(searchTerm)) {
        // Highlight the search term
        const regex = new RegExp(`(${searchTerm})`, "gi");
        resumeContent.innerHTML = resumeContent.innerHTML.replace(regex, '<span class="highlight">$1</span>');
    } else {
        alert(`"${searchTerm}" not found in the resume.`);
    }
}