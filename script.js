//parties header

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    toggle.addEventListener('click', function() {
    navUl.classList.toggle('active');
    });
    });

//partie sections equipe pour avoir l'effet progressive des obejets 

const observer =new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
document.querySelectorAll('.hidden').forEach((el)=>observer.observe(el));

//script des competences

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('competences');
    const elements = Array.from(container.children);
    // Clone tous les éléments
    elements.forEach(el => {
    const clone = el.cloneNode(true);
    container.appendChild(clone);
    });
    });


    //section projet

   
        $(document).ready(function () {
            function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
            rect.top < window.innerHeight && rect.bottom > 0
            );
            }
            function revealOnScroll() {
            $('.project-box').each(function () {
            if (isInViewport(this)) {
            $(this).addClass('visible');
            }
            });
            }
            // Déclenche au scroll et au chargement
           $(window).on('scroll resize load', function () {
            revealOnScroll();
            });
            // Appel immédiat
            revealOnScroll();
          

        //section contact

   
            function isInViewport(element) {
            const elementTop = $(element).offset().top;
            const elementBottom = elementTop + $(element).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            return elementBottom > viewportTop + 100 && elementTop < viewportBottom- 100;
            }
            function animateContacts() {
            $('.contacts').each(function () {
            const $el = $(this);
            if (isInViewport($el)) {
            $el.addClass('visible');
            } else {
            $el.removeClass('visible');
            }
            });
           }
            $(window).on('scroll resize', animateContacts);
            animateContacts();


            //section odc

            function animateOrangeSection() {
                const $orange = $('.orange-container');
                const top = $orange.offset().top;
               const bottom = top + $orange.outerHeight();
                const scrollTop = $(window).scrollTop();
                const windowHeight = $(window).height();
                if (bottom > scrollTop + 100 && top < scrollTop + windowHeight- 100) {
                $orange.addClass('visible');
                } else {
                $orange.removeClass('visible');
                }
                }
                $(window).on('scroll resize', animateOrangeSection);
                animateOrangeSection();


     });