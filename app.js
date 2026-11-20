"use strict";
const iconPaths={
  "printer":'<path d="M6 9V3h12v6M6 17H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2"/><path d="M6 14h12v7H6zM17 12h1"/>',
  "basket":'<path d="m8 4-4 6m12-6 4 6M2 10h20l-3 11H5L2 10Zm7 4v3m6-3v3M8 4h8"/>',
  "clock":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  "check-square":'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m7 12 3 3 7-7"/>',
  "arrow-up-right":'<path d="M6 18 18 6M6 6h12v12"/>',
  "arrow-down":'<path d="M12 4v16m-6-6 6 6 6-6"/>',
  "arrow-up":'<path d="M12 20V4m-6 6 6-6 6 6"/>',
  "plus":'<path d="M12 5v14M5 12h14"/>',
  "sparkles":'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM3 3v3m-1-1h3"/>',
  "lightbulb":'<path d="M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 4H9c0-2 0-3-1-4Z"/>',
  "copy":'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
  "package":'<path d="m12 2 10 5-10 5L2 7l10-5Zm10 5v10l-10 5-10-5V7m10 5v10M7 4.5l10 5V14"/>',
  "megaphone":'<path d="m3 10 13-5v14L3 14v-4Zm13-5 4-2v18l-4-2M5 15l2 7h4l-3-6M23 7l-1 1m1 8-1-1"/>',
  "bell":'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8M10 21h4M12 2V1"/>',
  "calendar-plus":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-9 3v5m-2.5-2.5h5"/>',
  "flag":'<path d="M4 22V3m0 0h16l-4 5 4 5H4"/>',
  "download":'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>'
};
function icon(name){return `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">${iconPaths[name]||iconPaths.plus}</svg>`;}
document.querySelectorAll("[data-icon]").forEach(el=>el.outerHTML=icon(el.dataset.icon));
const events=[
  {id:"three-kings",day:"06",title:"Три короля",subtitle:"Региональный выходной",type:"regional",open:true,
  status:"Выходной в Баварии, Баден-Вюртемберге и Саксонии-Анхальт. В остальных землях это не общий выходной. Учитывайте также местонахождение поставщика.",
  window:"4–5 января — ориентир покупок перед выходным",
  products:["Выпечка к чаепитию","Чай и кофе","Небольшие сладкие подарки"],
  prepare:["Проверить, затрагивает ли выходной магазин, склад или маршрут доставки поставщика.","Местную праздничную выпечку заказывать по традициям вашей аудитории, лучше с опорой на предзаказ.","Заранее закрепить актуальные часы работы в соцсетях и карточке магазина."],
  post:"Планируете семейное чаепитие? В нашем магазине есть [выпечка / набор] за [цена]. Предложение действует [даты]. Наш график на 6 января: [график]. Ждём вас по адресу [адрес]."},
  {id:"christmas",day:"07",title:"Рождество 7 января",subtitle:"По юлианскому календарю",type:"culture",
  status:"Повод для покупателей из общин, отмечающих Рождество по юлианскому календарю. Это не общегерманский выходной. Не все православные общины празднуют в этот день.",
  window:"4–6 января — подготовка к семейному столу; 6 января учесть региональный выходной",
  products:["Птица и продукты для запекания","Овощи, соленья и закуски","Выпечка, сладости и соки"],
  prepare:["Выбрать знакомые вашей аудитории позиции из текущего ассортимента.","Для скоропортящихся товаров уточнить предзаказ и возможность небольшой повторной поставки.","Показать варианты для праздничного стола с ценой и понятным сроком покупки."],
  post:"Готовитесь к рождественскому столу? Мы собрали [предложение] за [цена]. Купить можно [даты и часы]. Предзаказ принимаем до [дата], если он предусмотрен. Адрес магазина: [адрес]."},
  {id:"old-new-year",day:"14",title:"Старый Новый год",subtitle:"Культурный повод",type:"culture",
  status:"Отмечают в ночь с 13 на 14 января. Повод подходит не каждой аудитории: ориентируйтесь на привычки и запросы своих покупателей.",
  window:"12–13 января — покупки к праздничному вечеру",
  products:["Для салатов: яйца, овощи, горошек","Для закусок: сыры и гастрономия","К чаю: торты, печенье, конфеты"],
  prepare:["Собрать компактное предложение из двух-трёх подходящих позиций с общей ценой.","Проверить, можно ли использовать текущий ассортимент без большого отдельного заказа.","Напомнить о предложении 12–13 января и указать время работы магазина."],
  post:"Есть повод ещё раз собраться за столом. К Старому Новому году предлагаем [товары / набор] за [цена]. Заходите [даты] с [время] до [время]. Мы рядом: [адрес]."}
];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
document.getElementById("event-list").innerHTML=events.map(e=>`<details class="event" id="${e.id}" data-type="${e.type}" ${e.open?"open":""}><summary><span class="event-day">${e.day}<small>ЯНВАРЯ</small></span><div class="event-title"><h3>${e.title}</h3><p>${e.subtitle}</p></div>${icon("plus")}</summary><div class="event-body"><p class="event-status">${e.status}</p><div class="shopping-window">${icon("basket")}<span>${e.window}</span></div><h4>Что предложить</h4><div class="tags">${e.products.map(p=>`<span>${p}</span>`).join("")}</div><h4>Подготовить заранее</h4><ul>${e.prepare.map(p=>`<li>${p}</li>`).join("")}</ul><div class="post-example"><div class="post-top"><span>ИДЕЯ ДЛЯ ПУБЛИКАЦИИ</span><button class="copy-button" type="button" data-copy="${e.id}">${icon("copy")}Скопировать</button></div><p id="post-${e.id}">${esc(e.post)}</p><small>Пример текста: замените поля в скобках и уберите неприменимые условия.</small></div></div></details>`).join("");
const STORAGE_KEY="unco-january-2027-plan-v1";
const fieldIds=["campaign","sales-date","supplier","order-date","delivery-date","ad-date","personal-note"];
const fields=Object.fromEntries(fieldIds.map(id=>[id,document.getElementById(id)]));
const taskInputs=[...document.querySelectorAll(".check-items input")];
let persistenceAvailable=true;
try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");if(saved&&typeof saved==="object"){fieldIds.forEach(id=>{if(typeof saved[id]==="string") fields[id].value=saved[id];});taskInputs.forEach(input=>input.checked=saved[input.id]===true);}}catch{persistenceAvailable=false;}
function updateProgress(){const count=taskInputs.filter(t=>t.checked).length;document.getElementById("check-count").textContent=`${count} / 5`;document.getElementById("progress-fill").style.width=`${count*20}%`;document.querySelector("[role=progressbar]").setAttribute("aria-valuenow",String(count));}
function save(){const state={};fieldIds.forEach(id=>state[id]=fields[id].value);taskInputs.forEach(t=>state[t.id]=t.checked);try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));persistenceAvailable=true;}catch{persistenceAvailable=false;}document.getElementById("save-status").textContent=persistenceAvailable?"Сохранено на этом устройстве. Записи видны только вам.":"Браузер не разрешил сохранение. Скачайте план, чтобы не потерять записи.";updateProgress();}
function parseDate(value){if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return null;const [y,m,d]=value.split("-").map(Number);if(y<2026||y>2028)return null;const date=new Date(Date.UTC(y,m-1,d));return date.getUTCFullYear()===y&&date.getUTCMonth()===m-1&&date.getUTCDate()===d?date:null;}
function minusDays(date,days){return new Date(date.getTime()-days*86400000);}
function dateText(date){return new Intl.DateTimeFormat("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric",timeZone:"UTC"}).format(date);}
function currentPlan(){const sales=parseDate(fields["sales-date"].value);if(!sales)return null;return {sales,order:parseDate(fields["order-date"].value)||minusDays(sales,42),ad:parseDate(fields["ad-date"].value)||minusDays(sales,14),orderConfirmed:!!parseDate(fields["order-date"].value),adConfirmed:!!parseDate(fields["ad-date"].value)};}
function updatePlan(){const plan=currentPlan();const error=document.getElementById("plan-error");error.hidden=!!plan;document.getElementById("export-calendar").disabled=!plan;if(!plan){error.textContent="Выберите корректную дату начала продаж в 2026–2028 году.";document.getElementById("calculated-plan").textContent="";document.getElementById("reminder-dates").textContent="";return;}document.getElementById("calculated-plan").innerHTML=`<div><small>${plan.orderConfirmed?"Предзаказ · согласовано":"Предзаказ · ориентир"}</small><b>${dateText(plan.order)}</b><small>${plan.orderConfirmed?"Ваша дата поставщика":"За 6 недель до старта"}</small></div><div><small>${plan.adConfirmed?"Реклама · согласовано":"Реклама · ориентир"}</small><b>${dateText(plan.ad)}</b><small>${plan.adConfirmed?"Ваша дата сдачи материалов":"За 2 недели до старта"}</small></div>`;document.getElementById("reminder-dates").textContent=`Напомнить о предзаказе — ${dateText(minusDays(plan.order,4))}. О рекламных материалах — ${dateText(minusDays(plan.ad,4))}.`;}
fieldIds.forEach(id=>fields[id].addEventListener("input",()=>{updatePlan();save();}));
taskInputs.forEach(input=>input.addEventListener("change",save));
updateProgress();updatePlan();if(!persistenceAvailable)document.getElementById("save-status").textContent="Браузер не разрешил сохранение. Скачайте план, чтобы не потерять записи.";
let toastTimer;
function toast(message){const el=document.getElementById("toast");el.textContent=message;el.classList.add("visible");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("visible"),3500);}
async function copyText(text){try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);}else{const input=document.createElement("textarea");input.value=text;input.style.position="fixed";input.style.opacity="0";document.body.appendChild(input);input.select();const ok=document.execCommand("copy");input.remove();if(!ok)throw new Error("copy");}toast("Текст скопирован. Замените поля перед публикацией.");}catch{toast("Не удалось скопировать. Выделите текст и скопируйте вручную.");}}
document.querySelectorAll("[data-copy]").forEach(btn=>btn.addEventListener("click",()=>{const e=events.find(e=>e.id===btn.dataset.copy);if(e)copyText(e.post);}));
function download(contents,type,name){const url=URL.createObjectURL(new Blob([contents],{type}));const a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);}
const icsDate=date=>date.toISOString().slice(0,10).replaceAll("-","");
const icsEscape=s=>String(s).replace(/\\/g,"\\\\").replace(/\r?\n/g,"\\n").replace(/,/g,"\\,").replace(/;/g,"\\;");
function foldLine(line){const lines=[];let current="";let size=0;for(const char of line){const len=new TextEncoder().encode(char).length;if(size+len>75){lines.push(current);current=" ";size=1;}current+=char;size+=len;}lines.push(current);return lines.join("\r\n");}
document.getElementById("export-calendar").addEventListener("click",()=>{const p=currentPlan();if(!p){toast("Сначала выберите дату начала продаж.");return;}const campaign=fields.campaign.value.trim()||"Акция магазина";const stamp=new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d+/,"");const lines=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//UNCO//Store Director January 2027//RU","CALSCALE:GREGORIAN","METHOD:PUBLISH"];
  [{kind:"Предзаказ",date:p.order,confirmed:p.orderConfirmed},{kind:"Рекламные материалы",date:p.ad,confirmed:p.adConfirmed}].forEach((item,i)=>{const label=`${item.kind}: ${campaign}${item.confirmed?"":" (ориентир)"}`;lines.push("BEGIN:VEVENT",`UID:unco-${icsDate(p.sales)}-${i}-${icsDate(item.date)}@calendar.unco`,`DTSTAMP:${stamp}`,`DTSTART;VALUE=DATE:${icsDate(item.date)}`,`DTEND;VALUE=DATE:${icsDate(minusDays(item.date,-1))}`,`SUMMARY:${icsEscape(label)}`,`DESCRIPTION:${icsEscape(`Начало продаж: ${dateText(p.sales)}. ${item.confirmed?"Дата введена пользователем как согласованная.":"Расчётный ориентир; подтвердите срок у партнёра."} ${fields.supplier.value.trim()?"Поставщик: "+fields.supplier.value.trim()+".":""} Напоминание за 4 дня. Нерабочие дни учитывайте самостоятельно.`)}`,"BEGIN:VALARM","TRIGGER:-P4D","ACTION:DISPLAY",`DESCRIPTION:${icsEscape("Проверить срок: "+campaign)}`,"END:VALARM","END:VEVENT");});lines.push("END:VCALENDAR");download(lines.map(foldLine).join("\r\n")+"\r\n","text/calendar;charset=utf-8","UNCO_January_2027_Deadlines.ics");toast("Файл сроков скачан. Импортируйте его в свой календарь.");});
document.getElementById("export-plan").addEventListener("click",()=>{const p=currentPlan();const text=["UNCO Smart Shop — Мой план на январь 2027","",`Акция: ${fields.campaign.value||"не указана"}`,`Начало продаж: ${p?dateText(p.sales):"не указано"}`,`Поставщик: ${fields.supplier.value||"не указан"}`,`Предзаказ: ${p?dateText(p.order)+(p.orderConfirmed?" (согласовано)":" (ориентир)"):"не указан"}`,`Реклама: ${p?dateText(p.ad)+(p.adConfirmed?" (согласовано)":" (ориентир)"):"не указана"}`,`Доставка: ${fields["delivery-date"].value||"не указана"}`,"",...taskInputs.map(t=>`${t.checked?"[x]":"[ ]"} ${t.nextElementSibling.textContent}`),"","Моя заметка:",fields["personal-note"].value||"—","","Ориентиры уточняйте у поставщиков и рекламных партнёров.","Продвижение с UNCO: https://uss.bio/de#contactus"].join("\n");download("\uFEFF"+text,"text/plain;charset=utf-8","UNCO_January_2027_My_Plan.txt");toast("Ваш план скачан.");});
document.getElementById("reset-plan").addEventListener("click",()=>document.getElementById("reset-confirm").hidden=false);
document.getElementById("reset-no").addEventListener("click",()=>document.getElementById("reset-confirm").hidden=true);
document.getElementById("reset-yes").addEventListener("click",()=>{fieldIds.forEach(id=>fields[id].value=id==="campaign"?"Старый Новый год":id==="sales-date"?"2027-01-12":"");taskInputs.forEach(t=>t.checked=false);document.getElementById("reset-confirm").hidden=true;updatePlan();save();toast("Записи сброшены.");});
function openHash(){const id=decodeURIComponent(location.hash.slice(1));const el=document.getElementById(id);if(el?.tagName==="DETAILS")el.open=true;}
document.querySelectorAll('.date-strip a').forEach(a=>a.addEventListener("click",()=>{const d=document.querySelector(a.getAttribute("href"));if(d)d.open=true;}));window.addEventListener("hashchange",openHash);openHash();
let printState=[];window.addEventListener("beforeprint",()=>{printState=[...document.querySelectorAll("details")].map(el=>({el,open:el.open}));printState.forEach(x=>x.el.open=true);});window.addEventListener("afterprint",()=>printState.forEach(x=>x.el.open=x.open));document.querySelectorAll("[data-print]").forEach(btn=>btn.addEventListener("click",()=>window.print()));
if("IntersectionObserver" in window){const links=[...document.querySelectorAll(".nav-inner a")];const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));}}},{rootMargin:"-80px 0px -65% 0px",threshold:0});["holidays","timing","ideas","tell-unco","next","checklist"].forEach(id=>observer.observe(document.getElementById(id)));}

const briefIds=["brief-topic","brief-shop","brief-details","brief-when","brief-offer","brief-link"];
function makeBrief(){const value=id=>document.getElementById(id).value.trim();return ["Здравствуйте, UNCO! Хочу рассказать о поводе для продвижения магазина.","",`Тема: ${value("brief-topic")}`,`Магазин, город, адрес: ${value("brief-shop")||"[укажите магазин и город]"}`,`Что происходит: ${value("brief-details")||"[опишите товар или событие]"}`,`Дата, время, срок: ${value("brief-when")||"[укажите даты]"}`,`Цена и условия: ${value("brief-offer")||"[добавьте условия, если применимо]"}`,`Фото, видео или афиша: ${value("brief-link")||"[приложу отдельно]"}`,"","Помогите подготовить публикацию или обсудить продвижение этого повода."].join("\n");}
function updateBrief(){document.getElementById("brief-draft").value=makeBrief();}
briefIds.forEach(id=>document.getElementById(id).addEventListener("input",updateBrief));updateBrief();
document.getElementById("copy-brief").addEventListener("click",async()=>{const text=makeBrief();try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);}else{const draft=document.getElementById("brief-draft");draft.focus();draft.select();if(!document.execCommand("copy"))throw new Error("copy");}toast("Сообщение скопировано. Откройте связь с UNCO и отправьте его.");}catch{document.getElementById("brief-draft").focus();document.getElementById("brief-draft").select();toast("Выделили сообщение: скопируйте его вручную и отправьте UNCO.");}});
