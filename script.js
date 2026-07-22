const demos={
  lead:[
    ["Inquiry captured","Contact details arrive from a form or inbox."],
    ["Record organized","The lead is added to your chosen tracking system."],
    ["Reply prepared","A consistent response includes the right next step."],
    ["Owner notified","The right person receives a concise alert."]
  ],
  appointment:[
    ["Booking confirmed","The customer receives the correct time and details."],
    ["Calendar checked","The booking is recorded in the shared calendar."],
    ["Reminder scheduled","A helpful reminder is prepared before the visit."],
    ["Team updated","Relevant details are shared internally."]
  ],
  invoice:[
    ["Invoice status checked","The workflow identifies an invoice that needs attention."],
    ["Reminder prepared","A polite, consistent message is generated."],
    ["Customer contacted","The reminder is sent through the approved channel."],
    ["Follow-up logged","The action is recorded for visibility."]
  ]
};
let activeDemo="lead";
const demoSteps=document.querySelector("#demo-steps");
const runButton=document.querySelector("#run-demo");
function renderDemo(){
  demoSteps.innerHTML=demos[activeDemo].map(([title,copy])=>`<li><strong>${title}</strong><small>${copy}</small></li>`).join("");
  runButton.textContent="Run demo";
}
document.querySelectorAll(".demo-tab").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".demo-tab").forEach(tab=>{tab.classList.remove("active");tab.setAttribute("aria-pressed","false")});
  button.classList.add("active");button.setAttribute("aria-pressed","true");activeDemo=button.dataset.demo;renderDemo();
}));
runButton.addEventListener("click",()=>{
  const steps=[...demoSteps.children];steps.forEach(step=>step.classList.remove("done"));runButton.disabled=true;runButton.textContent="Running…";
  steps.forEach((step,index)=>setTimeout(()=>{step.classList.add("done");if(index===steps.length-1){runButton.disabled=false;runButton.textContent="Run again"}},250+index*420));
});
renderDemo();

const inputs={people:document.querySelector("#people"),hours:document.querySelector("#hours"),rate:document.querySelector("#rate"),percent:document.querySelector("#percent")};
function calculate(){
  const people=Math.max(1,Number(inputs.people.value)||1),hours=Math.max(0,Number(inputs.hours.value)||0),rate=Math.max(0,Number(inputs.rate.value)||0),percent=Math.max(0,Number(inputs.percent.value)||0);
  const monthlyHours=people*hours*4.33*(percent/100);
  document.querySelector("#people-output").value=people;
  document.querySelector("#hours-output").value=hours;
  document.querySelector("#percent-output").value=`${percent}%`;
  document.querySelector("#monthly-hours").textContent=Math.round(monthlyHours).toLocaleString();
  document.querySelector("#monthly-value").textContent=Math.round(monthlyHours*rate).toLocaleString();
}
Object.values(inputs).forEach(input=>input.addEventListener("input",calculate));calculate();

const menuButton=document.querySelector(".menu-button"),nav=document.querySelector("#site-nav");
menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));menuButton.querySelector(".sr-only").textContent=open?"Close menu":"Open menu"});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false")}));

const auditForm=document.querySelector("#audit-form");
const auditButton=auditForm.querySelector('button[type="submit"]');
const formNote=auditForm.querySelector(".form-note");
const consentLabel=auditForm.querySelector(".consent");
auditButton.textContent="Send my audit request";
formNote.textContent="Your request will be emailed to Panhandle Automation. You will receive an acknowledgment after submitting.";
consentLabel.lastChild.textContent=" I agree to send these details to Panhandle Automation so my request can be reviewed.";

auditForm.addEventListener("submit",async event=>{
  event.preventDefault();
  const status=document.querySelector("#form-status");
  auditButton.disabled=true;
  auditButton.textContent="Sending…";
  status.textContent="Sending your request…";
  status.classList.add("show");
  try{
    const form=new FormData(auditForm);
    form.append("_subject","New free automation audit request");
    form.append("_template","table");
    form.append("_captcha","false");
    form.append("_autoresponse","Thanks for requesting a free automation audit from Panhandle Automation. Jesse will review your request and reply by email.");
    const response=await fetch("https://formsubmit.co/ajax/jesse@panhandleautomation.com",{method:"POST",headers:{Accept:"application/json"},body:form});
    if(!response.ok) throw new Error("Request failed");
    auditForm.reset();
    status.textContent="Thanks — your request was sent. Check your email for confirmation.";
  }catch(error){
    status.innerHTML='We could not send the form automatically. Please email <a href="mailto:jesse@panhandleautomation.com">jesse@panhandleautomation.com</a>.';
  }finally{
    auditButton.disabled=false;
    auditButton.textContent="Send my audit request";
    status.focus();
  }
});
document.querySelector("#year").textContent=new Date().getFullYear();
