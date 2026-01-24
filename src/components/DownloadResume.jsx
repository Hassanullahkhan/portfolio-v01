const resume_url = "/resume.docx";

const DownloadResume = () => {
  const handleDownload = (url) => {
    
    try {
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          const blobUrl = window.URL.createObjectURL(blob);
          const fileName = url.split("/").pop();
          const a = document.createElement("a");
          a.href = blobUrl;
          a.setAttribute("download", fileName);
          document.body.appendChild(a);
          a.click();
          a.remove();
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div onClick={() => handleDownload(resume_url)}>
      Download Resume
    </div>
  );
};

export default DownloadResume;
