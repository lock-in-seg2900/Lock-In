document.addEventListener('DOMContentLoaded', function()
{
    const faqItem = document.querySelectorAll('.faq-item');

    faqItem.forEach(item => 
        {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => 
            {
            item.classList.toggle('active');
        
        });
    });

const En = document.getElementById('en');
const Fr = document.getElementById('fr');

function switchLang(lang)
{
    const elements = document.querySelectorAll('[data-en][data-fr]');

    elements.forEach(element => {
        if (lang == 'fr')
        {
            element.textContent = element.getAttribute('data-fr');
        }
        else
        {
            element.textContent = element.getAttribute('data-en');
        }
    });

    if (lang == 'fr')
    {
        En.style.opacity = '0.75'
        En.style.textDecoration = 'none'
        Fr.style.opacity = '1'
        Fr.style.textDecoration = 'underline'
    }
    else
    {
        En.style.opacity = '1'
        En.style.textDecoration = 'underline'
        Fr.style.opacity = '0.75'
        Fr.style.textDecoration = 'none'
    }
}

En.addEventListener('click', () => switchLang('en'))
Fr.addEventListener('click', () => switchLang('fr'))


switchLang('en')

});
