javascript:(function()%7B!function()%7Bif(document.querySelector(%22%23pertDialog%22))return%20void%20alert(%22You%20already%20have%20a%20PERT%20Dialog%20in%20this%20Window%22)%3Bconst%20t%3Ddocument.querySelector('iframe%5Bid%5E%3D%22mce_%22%5D')%3F.contentWindow.document.getElementById(%22tinymce%22)%7C%7Cdocument.querySelector('%5Baria-label%3D%22edit-box%22%5D')%7C%7Cdocument.querySelector('%5Baria-label%3D%22Discussion%22%5D')%7C%7Cdocument.querySelector('%5Bcontenteditable%3D%22true%22%5D')%3Bif(!t)return%20void%20alert(%22Please%20click%20on%20comment%20box%20before%20using%20PERT%20bookmarklet.%22)%3Bconst%20e%3D%22pertConfig%22%2Cn%3Dfunction()%7Bconst%20t%3DlocalStorage.getItem(e)%3Breturn%20t%3FJSON.parse(t)%3A%7B%7D%7D()%2Co%3D'pattern%3D%22%5E((%5C%5Cd*%5C%5C.%3F%5C%5Cd%2B)%5BMm%5D%3F%7C((%5C%5Cd*%5C%5C.%3F%5C%5Cd%2B)%5BHh%5D%20%3F((%5C%5Cd*%5C%5C.%3F%5C%5Cd%2B)%5BMm%5D)%3F))%24%22%20title%3D%22Time%20values%20can%20be%20either%20hour%20value%20(1.5)%20or%20hours%20and%20minutes%20(1h%2030m)%22'%2Cr%3D%7Bcomms_deploys_qa_default_percentage%3An%3F.comms_deploys_qa_default_percentage%7C%7C20%2Ccode_review_default_percentage%3An%3F.code_review_default_percentage%7C%7C10%2Cautomated_tests_default_percentage%3An%3F.automated_tests_default_percentage%7C%7C0%2Cbackdrop_blur%3An%3F.backdrop_blur%7C%7C%22true%22%2Cround_to_next_minutes%3An%3F.round_to_next_minutes%7C%7C10%7D%2Ca%3Dt%3D%3E%60%24%7BMath.floor(t%2F60)%7Dh%24%7Bt%2560%3F%60%20%24%7BString(Math.floor(t%2560)).padStart(2%2C%220%22)%7Dm%60%3A%22%22%7D%60%2Cs%3Dt%3D%3E%7Bconst%20e%3DparseInt(r.round_to_next_minutes)%3Breturn%20e%3FMath.ceil(t%2Fe)*e%3At%7D%2Cd%3Dt%3D%3E%7Bif(!t)return%200%3Bconst%20e%3D%5B...t.matchAll(%2F(%5Cd%2B(%3F%3A%5C.%5Cd%2B)%3F)%2B(h%7Cm)%2Fgi)%5D%3Bif(e.length)%7Bconst%20t%3De.map((t%3D%3E%22h%22%3D%3D%3Dt.at(-1)%3FNumber(t%5B0%5D.replace(%2Fh%7Cm%2Fi%2C%22%22))%3ANumber(t%5B0%5D.replace(%2Fh%7Cm%2Fi%2C%22%22))%2F60)).reduce(((t%2Ce)%3D%3Et%2Be))%3Breturn%20Math.floor(60*t)%7Dreturn%20Math.floor(60*Number(t))%7D%2Ci%3D%60%3Cdetails%3E%5Cn%20%20%20%20%20%20%20%20%3Csummary%20style%3D%22cursor%3A%20pointer%3B%22%3E%E2%9A%99%EF%B8%8F%20%3Cstrong%3E%24%7Bwindow.location.hostname.split(%22.%22)%3F.%5B0%5D.toUpperCase()%7C%7C%22%22%7D%3C%2Fstrong%3E%20PERT%20defaults%3C%2Fsummary%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3Cform%20id%3D%22pertConfigForm%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20id%3D%22pertConfig%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%24%7BObject.entries(r).map(((%5Bt%2Ce%5D)%3D%3E%60%3Ctr%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%24%7Bt.split(%22_%22).join(%22%20%22)%7D%3C%2Flabel%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20style%3D%22text-align%3A%20right%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%20name%3D%22%24%7Bt%7D%22%20required%20size%3D%225%22%20value%3D%22%24%7Be%7D%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftr%3E%60)).join(%22%22)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftable%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20id%3D%22pertConfigSubmit%22%20type%3D%22submit%22%3ESave%20Config%3C%2Fbutton%3E%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3Csmall%3ESaved%20in%20LocalStorage%20and%20only%20applicable%20to%20this%20JIRA%20project.%3C%2Fsmall%3E%5Cn%20%20%20%20%20%20%20%20%3C%2Fform%3E%5Cn%20%20%20%20%3C%2Fdetails%3E%60%2Cl%3D%220px%200px%20100px%200px%22%2Cp%3Ddocument.createElement(%22tr%22)%2Cc%3D%60%5Cn%5Ct%3Ctd%3E%3Cb%3ETask%3C%2Fb%3E%3Cbr%3E%3Cinput%20size%3D%2220%22%20type%3D%22text%22%20name%3D%22task%22%20%2F%3E%3C%2Ftd%3E%5Cn%5Ct%3Ctd%3E%3Cb%3EOptimistic%3C%2Fb%3E%3Cbr%3E%3Cinput%20required%20size%3D%225%22%20%24%7Bo%7D%20type%3D%22text%22%20name%3D%22best%22%20%2F%3E%3C%2Ftd%3E%5Cn%5Ct%3Ctd%3E%3Cb%3ELikely%3C%2Fb%3E%3Cbr%3E%3Cinput%20required%20size%3D%225%22%20%24%7Bo%7D%20type%3D%22text%22%20name%3D%22likely%22%20%2F%3E%3C%2Ftd%3E%5Cn%5Ct%3Ctd%3E%3Cb%3EPessimistic%3C%2Fb%3E%3Cbr%3E%3Cinput%20required%20size%3D%225%22%20%24%7Bo%7D%20type%3D%22text%22%20name%3D%22worst%22%20%2F%3E%3C%2Ftd%3E%5Cn%5Ct%3Ctd%20valign%3D%22bottom%22%20style%3D%22text-align%3A%20right%22%3E%5Cn%5Ct%5Ct%3Cbutton%20type%3D%22button%22%20class%3D%22pertAddRow%22%3E%E2%9E%95%3C%2Fbutton%3E%5Cn%5Ct%5Ct%3Cbutton%20type%3D%22button%22%20class%3D%22pertRemoveRow%22%3E%E2%9E%96%3C%2Fbutton%3E%5Cn%5Ct%3C%2Ftd%3E%60%2Cu%3Ddocument.createElement(%22div%22)%3Bu.style.cssText%3D%60--pertDialogWrapperInset%3A%200%3B%5Cnposition%3A%20fixed%3B%5Cnz-index%3A%209999%3B%5Cndisplay%3A%20flex%3B%5Cnjustify-content%3A%20center%3B%5Cnalign-items%3A%20center%3B%5Cn%24%7B%22true%22%3D%3D%3Dr.backdrop_blur%3F%22backdrop-filter%3A%20blur(5px)%3B%22%3A%22%22%7D%5Cninset%3A%20var(--pertDialogWrapperInset)%3B%60%3Bconst%20m%3D%60%3Cdiv%20id%3D%22pertDialog%22%3E%5Cn%20%20%20%20%3Cbutton%20style%3D%22float%3A%20right%22%20type%3D%22button%22%20id%3D%22pertToggle%22%3EMinimize%20PERT%20Dialog%3C%2Fbutton%3E%5Cn%20%20%20%20%3Cdiv%20id%3D%22pertDialogContent%22%3E%5Cn%20%20%20%20%24%7Bi%7D%5Cn%5Ct%3Cform%20id%3D%22pertForm%22%3E%5Cn%20%20%20%20%20%20%20%20%3Cp%3ETime%20values%20can%20be%20either%20hour%20value%20(1.5)%20or%20hours%20and%20minutes%20(1h%2030m)%3C%2Fp%3E%5Cn%20%20%20%20%20%20%20%20%3Cp%3ETotals%20will%20be%20rounded%20to%20next%20%24%7Br.round_to_next_minutes%7D%20minutes%3C%2Fp%3E%5Cn%5Ct%5Ct%3Ctable%3E%5Cn%5Ct%5Ct%5Ct%3Ctbody%20id%3D%22pertTableBody%22%3E%3C%2Ftbody%3E%5Cn%5Ct%5Ct%5Ct%3Ctbody%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%3Ctd%20colspan%3D%224%22%3ESolution%20Design%20(Scoping%20%2F%20Investigation)%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%3Ctd%20colspan%3D%221%22%20style%3D%22text-align%3A%20right%22%3E%3Cinput%20required%20size%3D%225%22%20%24%7Bo%7D%20type%3D%22text%22%20name%3D%22scoping%22%20%2F%3E%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftbody%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3Ctbody%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%20colspan%3D%225%22%3E%3Csmall%3EUse%20override%20fields%20to%20switch%20to%20non%20percentage%20based%20time%3C%2Fsmall%3E%3C%2Ftd%3E%3C%2Ftr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%3Ctd%20colspan%3D%222%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Comms%2C%20Deploys%20and%20QA%20(%24%7Br.comms_deploys_qa_default_percentage%7D%25%20recommended)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%3Ctd%20colspan%3D%222%22%20style%3D%22text-align%3A%20left%22%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%5Ct%3Cinput%20required%20min%3D%220%22%20max%3D%22100%22%20value%3D%22%24%7Br.comms_deploys_qa_default_percentage%7D%22%20step%3D%225%22%20type%3D%22range%22%20name%3D%22comms_deploys_qa%22%20oninput%3D%22this.nextElementSibling.value%20%3D%20this.value%22%2F%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%5Ct%3Coutput%3E%24%7Br.comms_deploys_qa_default_percentage%7D%3C%2Foutput%3E%25%20or%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20style%3D%22text-align%3A%20right%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%20size%3D%225%22%20type%3D%22text%22%20%24%7Bo%7D%20name%3D%22comms_deploys_qa_override%22%20placeholder%3D%22override%22%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%3Ctd%20colspan%3D%222%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Code%20review%20and%20Fixes%20(%24%7Br.code_review_default_percentage%7D%25%20recommended)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20colspan%3D%222%22%20style%3D%22text-align%3A%20left%22%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%5Ct%3Cinput%20required%20min%3D%220%22%20max%3D%22100%22%20value%3D%22%24%7Br.code_review_default_percentage%7D%22%20step%3D%225%22%20type%3D%22range%22%20name%3D%22code_review%22%20oninput%3D%22this.nextElementSibling.value%20%3D%20this.value%22%2F%3E%20%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%5Ct%3Coutput%3E%24%7Br.code_review_default_percentage%7D%3C%2Foutput%3E%25%20or%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20style%3D%22text-align%3A%20right%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%20size%3D%225%22%20type%3D%22text%22%20%24%7Bo%7D%20name%3D%22code_review_override%22%20placeholder%3D%22override%22%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%3Ctd%20colspan%3D%222%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Automated%20Tests%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%3Ctd%20colspan%3D%222%22%20style%3D%22text-align%3A%20left%22%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%5Ct%3Cinput%20required%20min%3D%220%22%20max%3D%22100%22%20value%3D%22%24%7Br.automated_tests_default_percentage%7D%22%20step%3D%225%22%20type%3D%22range%22%20name%3D%22automated_tests%22%20oninput%3D%22this.nextElementSibling.value%20%3D%20this.value%22%2F%3E%20%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%5Ct%3Coutput%3E%24%7Br.automated_tests_default_percentage%7D%3C%2Foutput%3E%25%20or%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20style%3D%22text-align%3A%20right%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%20size%3D%225%22%20type%3D%22text%22%20%24%7Bo%7D%20name%3D%22automated_tests_override%22%20placeholder%3D%22override%22%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%5Ct%5Ct%5Ct%3C%2Ftbody%3E%5Cn%5Ct%5Ct%5Ct%3Ctfoot%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctr%3E%5Ct%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%3Ctd%20colspan%3D%225%22%20style%3D%22text-align%3A%20right%22%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%5Ct%3Cbutton%20id%3D%22pertSubmit%22%20type%3D%22submit%22%3EAdd%20to%20Comment%3C%2Fbutton%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%5Ct%3Cbutton%20id%3D%22pertCancel%22%20value%3D%22cancel%22%20formnovalidate%3ECancel%3C%2Fbutton%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%5Ct%5Ct%5Ct%3C%2Ftfoot%3E%5Cn%5Ct%5Ct%3C%2Ftable%3E%5Cn%5Ct%3C%2Fform%3E%5Cn%20%20%20%20%3C%2Fdiv%3E%5Cn%5Ct%3C%2Fdialog%3E%60%3Bu.innerHTML%3Dm%2Cdocument.body.appendChild(u)%3Bconst%20g%3Ddocument.getElementById(%22pertDialog%22)%3Bg.style.cssText%3D%22--pertDialogShadow%3A%200px%200px%20100px%200px%3B%5Cnbackground%3A%20white%3B%5Cnpadding%3A%2020px%3B%5Cnbox-shadow%3A%20var(--pertDialogShadow)%3B%5Cnborder-radius%3A%2010px%3B%5Cn%7D%22%3Bconst%20_%3Ddocument.getElementById(%22pertForm%22)%2Cy%3Ddocument.getElementById(%22pertDialogContent%22)%2Cb%3Ddocument.getElementById(%22pertTableBody%22)%2Cv%3D%5B%5D%3Bp.innerHTML%3Dc%2Cb.appendChild(p)%2Cb.querySelector(%22.pertRemoveRow%22).hidden%3D!0%2Cg.querySelector('%5Bname%3D%22task%22%5D').focus()%3Bconst%20h%3Ddocument.getElementById(%22pertConfigForm%22)%2Cw%3Dt%3D%3E%7Bt.target%26%26t.target.classList.contains(%22pertAddRow%22)%26%26(t%3D%3E%7Bt.preventDefault()%3Bconst%20e%3Dt.target%3Be.hidden%3D!0%3Bconst%20n%3Ddocument.createElement(%22tr%22)%3Bn.innerHTML%3Dc%2Cb.appendChild(n)%2Cconsole.log(%22here%22)%2Ce.closest(%22tr%22).nextSibling.querySelector('%5Bname%3D%22task%22%5D').focus()%7D)(t)%2Ct.target%26%26t.target.classList.contains(%22pertRemoveRow%22)%26%26(t%3D%3E%7Bt.preventDefault()%3Bconst%20e%3Dt.target.closest(%22tr%22)%2Cn%3De.previousElementSibling%3Bnull%3D%3D%3De.nextSibling%26%26(n.querySelector(%22.pertAddRow%22).hidden%3D!1)%2Ce.remove()%7D)(t)%2Ct.target%26%26%22pertCancel%22%3D%3D%3Dt.target.attributes.id%3F.value%26%26(t%3D%3E%7Bt.preventDefault()%2Cu.remove()%7D)(t)%2Ct.target%26%26%22pertToggle%22%3D%3D%3Dt.target.attributes.id%3F.value%26%26(t%3D%3E%7Bt.preventDefault()%2C%22none%22!%3D%3Dy.style.display%3F(t.target.textContent%3D%22Maximise%20PERT%20Dialog%22%2Cy.style.display%3D%22none%22%2Cu.style.setProperty(%22--pertDialogWrapperInset%22%2C%22auto%20auto%2020px%2020px%22)%2Cg.style.setProperty(%22--pertDialogShadow%22%2C%22none%22))%3A(t.target.textContent%3D%22Minimize%20PERT%20Dialog%22%2Cy.style.display%3D%22block%22%2Cu.style.setProperty(%22--pertDialogWrapperInset%22%2C%220%22)%2Cg.style.setProperty(%22--pertDialogShadow%22%2Cl))%7D)(t)%7D%3Bdocument.addEventListener(%22click%22%2Cw%2C!0)%2C_.addEventListener(%22submit%22%2C(function(e)%7Be.preventDefault()%2Cdocument.removeEventListener(%22click%22%2Cw%2C!0)%2Cu.remove()%3Bconst%20n%3Dnew%20FormData(_)%2Co%3D%7Btask%3An.getAll(%22task%22)%2Cbest%3An.getAll(%22best%22).map((t%3D%3Ed(t)))%2Clikely%3An.getAll(%22likely%22).map((t%3D%3Ed(t)))%2Cworst%3An.getAll(%22worst%22).map((t%3D%3Ed(t)))%2Cscoping%3Ad(n.get(%22scoping%22))%2Ccomms_deploys_qa%3AparseInt(n.get(%22comms_deploys_qa%22))%2Ccomms_deploys_qa_override%3An.get(%22comms_deploys_qa_override%22)%2Ccode_review%3AparseInt(n.get(%22code_review%22))%2Ccode_review_override%3An.get(%22code_review_override%22)%2Cautomated_tests%3AparseInt(n.get(%22automated_tests%22))%2Cautomated_tests_override%3An.get(%22automated_tests_override%22)%7D%2Cr%3Do.task.map(((t%2Ce)%3D%3E%7Bconst%20n%3Da(o.best%5Be%5D)%2Cr%3Da(o.likely%5Be%5D)%2Cd%3Da(o.worst%5Be%5D)%2Ci%3D(o.best%5Be%5D%2B4*o.likely%5Be%5D%2Bo.worst%5Be%5D)%2F6%3Breturn%20v.push(s(i))%2C%60%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%24%7B%22%22%3D%3D%3Do.task%5B0%5D%26%261%3D%3D%3Do.task.length%3F%22%22%3A%60%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3E%24%7Bo.task%5Be%5D%7D%3C%2Ftd%3E%60%7D%5Cn%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%20data-colwidth%3D%22115%22%3E%24%7Bn%7D%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%20data-colwidth%3D%22115%22%3E%24%7Br%7D%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%20data-colwidth%3D%22115%22%3E%24%7Bd%7D%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%20data-colwidth%3D%22115%22%3E%24%7Ba(s(i))%7D%3C%2Ftd%3E%5Cn%5Ct%5Ct%3C%2Ftr%3E%60%7D))%2Ci%3Dv.reduce(((t%2Ce)%3D%3Et%2Be)%2C0)%3Bconst%20l%3Do.comms_deploys_qa_override%3Fs(d(o.comms_deploys_qa_override))%3As(i*o.comms_deploys_qa%2F100)%2Cp%3Do.code_review_override%3Fs(d(o.code_review_override))%3As(i*o.code_review%2F100)%2Cc%3Do.automated_tests_override%3Fs(d(o.automated_tests_override))%3As(i*o.automated_tests%2F100)%2Cm%3Ds(o.scoping)%2Cg%3Da(i%2Bm%2Bl%2Bp%2Bc)%3Bt.innerHTML.includes(%22Add%20a%20comment%E2%80%A6%22)%26%26(t.innerHTML%3D%22%22)%3Bconst%20y%3D%60%3Ctable%20data-number-column%3D%22false%22%3E%5Cn%5Ct%5Ct%3Ctbody%3E%5Cn%5Ct%5Ct%5Ct%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%24%7B%22%22%3D%3D%3Do.task%5B0%5D%26%261%3D%3D%3Do.task.length%3F%22%22%3A'%3Cth%20rowspan%3D%221%22%20colspan%3D%221%22%3E%3Cstrong%3ETask%3C%2Fstrong%3E%3C%2Fth%3E'%7D%5Cn%5Ct%5Ct%5Ct%5Ct%3Cth%20rowspan%3D%221%22%20colspan%3D%221%22%3E%3Cstrong%3EOptimistic%3C%2Fstrong%3E%3C%2Fth%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Cth%20rowspan%3D%221%22%20colspan%3D%221%22%3E%3Cstrong%3ELikely%3C%2Fstrong%3E%3C%2Fth%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Cth%20rowspan%3D%221%22%20colspan%3D%221%22%3E%3Cstrong%3EPessimistic%3C%2Fstrong%3E%3C%2Fth%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Cth%20rowspan%3D%221%22%20colspan%3D%221%22%3E%3Cstrong%3EPERT%3C%2Fstrong%3E%3C%2Fth%3E%5Cn%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%5Ct%5Ct%5Ct%24%7Br.join(%22%22)%7D%5Cn%5Ct%5Ct%3C%2Ftbody%3E%5Cn%5Ct%3C%2Ftable%3E%5Cn%5Ct%3Ctable%3E%5Cn%5Ct%5Ct%3Ctbody%3E%5Cn%5Ct%5Ct%5Ct%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3E%3Cstrong%3EPERT%20Development%20Time%3C%2Fstrong%3E%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3E%3Cstrong%3E%24%7Ba(i)%7D%3C%2Fstrong%3E%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%24%7Bm%3F%60%5Cn%5Ct%5Ct%5Ct%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3ESolution%20Design%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3E%24%7Ba(m)%7D%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%60%3A%22%22%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%24%7Bl%3F%60%5Cn%5Ct%5Ct%5Ct%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3EComms%2C%20Deploys%20and%20QA%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3E%24%7Ba(l)%7D%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%60%3A%22%22%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%24%7Bp%3F%60%5Cn%5Ct%5Ct%5Ct%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3ECode%20Review%20and%20Fixes%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3E%24%7Ba(p)%7D%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%60%3A%22%22%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%24%7Bc%3F%60%5Cn%5Ct%5Ct%5Ct%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3EAutomated%20Tests%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3E%24%7Ba(c)%7D%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%60%3A%22%22%7D%5Cn%5Ct%5Ct%5Ct%3Ctr%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3E%3Cstrong%3ETotal%20Estimate%3C%2Fstrong%3E%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3Ctd%20rowspan%3D%221%22%20colspan%3D%221%22%3E%5Cn%5Ct%5Ct%5Ct%5Ct%5Ct%3Cstrong%3E%24%7Bg%7D%3C%2Fstrong%3E%5Cn%5Ct%5Ct%5Ct%5Ct%3C%2Ftd%3E%5Cn%5Ct%5Ct%5Ct%3C%2Ftr%3E%5Cn%5Ct%5Ct%3C%2Ftbody%3E%5Cn%5Ct%3C%2Ftable%3E%5Cn%5Ct%60%3Bt.innerHTML%2B%3Dy%7D))%2Ch.addEventListener(%22submit%22%2C(function(t)%7Bt.preventDefault()%3Bconst%20n%3Dnew%20FormData(h)%2Co%3D%7B%7D%3B%5B...n.entries()%5D.forEach(((%5Bt%2Ce%5D)%3D%3E%7Bo%5Bt%5D%3De%7D))%2ClocalStorage.setItem(e%2CJSON.stringify(o))%2Cu.remove()%7D))%7D()%3B%7D)()