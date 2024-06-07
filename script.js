function generateLink() {
    const svgCode = "svgcodehere";
    const encodedSvg = encodeURIComponent(svgCode).replace(/%20/g, ' '); 
    const linkTag = `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,${encodedSvg}">`;
    document.getElementById("linkTag").innerHTML = linkTag;
  }
  