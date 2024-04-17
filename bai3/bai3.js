document.addEventListener("DOMContentLoaded", function() {
    const cv = document.getElementById('CV');
    cv.addEventListener('click', function() {
        
        const fileUrl = 'cv.pdf'; 
        fetch(fileUrl)
            .then(response => response.blob())
            .then(blob => {
                saveAs(blob, 'cv.pdf');
            })
            .catch(error => {
                console.error('Đã xảy ra lỗi khi tải file:', error);
            });
    });
  });
  