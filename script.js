
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const links = document.querySelector(".navlinks");
  if(menu && links){
    menu.addEventListener("click", () => {
      links.style.display = links.style.display === "flex" ? "" : "flex";
      if(links.style.display === "flex"){
        links.style.position="absolute"; links.style.top="68px"; links.style.left="0"; links.style.right="0";
        links.style.background="#fff"; links.style.padding="18px 20px"; links.style.flexDirection="column";
        links.style.alignItems="flex-start"; links.style.borderBottom="1px solid #e6eaf1";
      }
    });
  }
  document.querySelectorAll("[data-search]").forEach(input=>{
    input.addEventListener("input",()=>{
      const q=input.value.toLowerCase();
      document.querySelectorAll("[data-item]").forEach(el=>{
        el.style.display=el.innerText.toLowerCase().includes(q) ? "" : "none";
      });
    });
  });
  document.querySelectorAll("form[data-wa]").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const fd=new FormData(form);
      const name=fd.get("name")||"";
      const service=fd.get("service")||"Documentation enquiry";
      const msg=`Hello NRIDocs, I would like assistance with ${service}. My name is ${name}.`;
      window.open("https://wa.me/917709422922?text="+encodeURIComponent(msg),"_blank");
    });
  });
});
