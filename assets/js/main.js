
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email

}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('skills')
    softSkills.innerHTML = profileData.skills.hardSkills.map(skill =>
        `<li>
            <img src="${skill.logo}" alt="${skill.name}">
        </li>`
    ).join('')
}

function updatePortfolio(profileData) {
    const projeto = document.getElementById('projetos')
    projeto.innerHTML = profileData.portfolio.map(estudo =>
        `<div class="projetos">
            <h3>${estudo.name}</h3>
            <p>${estudo.descricao}</p>
            <a class="link" href="${estudo.url}" target="_blank" rel="noopener noreferrer">Link para o repositório</a>
        </div>`
    ).join('')
}

function updateFormacao(profileData){
    const formacao = document.getElementById('formacao')
    formacao.innerHTML = profileData.formacao.map(estudo => 
        `<div class="section-conteudo">
            <h3>${estudo.name}</h2>
            <p>${estudo.descricao}</p>
        </div>`
    )
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updatePortfolio(profileData)
    updateFormacao(profileData)
})()






