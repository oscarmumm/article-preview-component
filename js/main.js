const shareBtn = document.getElementById('share-btn');
const sharePostDiv = document.getElementById('share-post-div');
const iconShare = document.getElementById('icon-share');

shareBtn.addEventListener('click', () => {
  sharePostDiv.classList.toggle('active');
  sharePostDiv.classList.toggle('hidden');
  shareBtn.classList.toggle('active-btn');
  iconShare.classList.toggle('icon-share-active')
})