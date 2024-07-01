const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)
async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
        await navigator.clipboard.writeText(link)
        alert("Your link has been copied!")
    } catch(err) {
        console.error(err)
    }
}
shareButtons.forEach(shareButtons => 
    shareButtons.addEventListener('click', copyText))
