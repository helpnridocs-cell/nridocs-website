
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

  const finderBtn=document.getElementById("findServiceBtn");
  if(finderBtn){
    finderBtn.addEventListener("click",()=>{
      const purpose=(document.getElementById("purpose")||{}).value||"";
      const country=(document.getElementById("country")||{}).value||"";
      const need=(document.getElementById("need")||{}).value||"";
      const result=document.getElementById("finderResult");
      const map={
        birth:{title:"Birth Certificate Assistance",desc:"You may need birth certificate retrieval or related birth-record documentation.",url:"services/birth-certificate.html"},
        status:{title:"Single Status Certificate",desc:"If you need proof of single status for an overseas marriage or related purpose, this may be the relevant route.",url:"services/single-status-certificate.html"},
        authentication:{title:"Apostille / Attestation",desc:"Your document may need authentication for use outside India. The exact route depends on the destination country and document.",url:"services/apostille.html"},
        pcc:{title:"Police Clearance Certificate",desc:"PCC assistance may be relevant for immigration, visa, employment or other overseas requirements.",url:"services/pcc.html"},
        oci:{title:"OCI Documentation",desc:"OCI documentation guidance may be relevant if you are applying based on Indian origin or eligibility.",url:"services/oci.html"},
        frro:{title:"FRRO Registration",desc:"FRRO-related documentation may be relevant for foreign nationals staying in India, depending on their circumstances.",url:"services/frro-registration.html"},
        education:{title:"Degree / Educational Documents",desc:"Educational certificate and authentication support may be relevant for study, employment or overseas verification.",url:"services/degree-certificate.html"},
        other:{title:"Expert Consultation",desc:"Because your requirement is not specific yet, the best next step is to speak with the NriDocs team.",url:"contact.html"}
      };
      if(!need){
        result.innerHTML='<div class="result-placeholder"><div class="result-icon">!</div><h2>Select a document type first.</h2><p>Choose the closest option above and we’ll show a relevant route.</p></div>';
        return;
      }
      const item=map[need]||map.other;
      const msg=`Hello NRIDocs, I am based in ${country||"another country"} and need help with ${item.title}. Purpose: ${purpose||"Not specified"}.`;
      result.innerHTML=`<div class="result-live"><span class="recommend-badge">RECOMMENDED STARTING POINT</span><h2>${item.title}</h2><p>${item.desc}</p><div class="service-meta"><span>Based in: ${country||"Not selected"}</span><span>Purpose: ${purpose||"Not selected"}</span></div><div class="result-actions"><a class="btn btn-primary" href="${item.url}">View Service →</a><a class="btn btn-secondary" href="https://wa.me/917709422922?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">WhatsApp an Expert</a></div></div>`;
    });
  }

  const trackBtn=document.getElementById("trackBtn");
  if(trackBtn){
    trackBtn.addEventListener("click",()=>{
      const field=document.getElementById("orderNumber");
      const message=document.getElementById("trackMessage");
      const value=(field.value||"").trim();
      if(!value){
        message.textContent="Please enter your NriDocs order number.";
        return;
      }
      message.innerHTML=`Order <strong>${value.replace(/[<>&"]/g,"")}</strong> has been received. Live status tracking will be connected to the NriDocs order system; for the current status, <a href="https://wa.me/917709422922?text=${encodeURIComponent("Hello NRIDocs, please share the current status of my order "+value)}" target="_blank" rel="noopener" style="color:var(--orange)">WhatsApp the support team →</a>`;
    });
  }

});
