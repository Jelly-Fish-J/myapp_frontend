(()=>{
  const footer = document.createElement("div");
  footer.style.position = "sticky";
  footer.style.gridArea = "footer";

  footer.innerHTML = /*html */ `
  <hr />
        <address>
          <h5>관리자 이메일 : maystar5987@gmail.com</h5>
        </address>
  `;

  document.body.append(footer);
})()