// loading
// 'use strict';

// ローディング画面
function loadedPage() {
    const loadingID = document.getElementById("loading_page");
    loadingID.classList.add("loaded");
}

function scrollactive() {
    const mainvisual = document.getElementById("mainvisual");
    mainvisual.classList.add("maindefoult");
}

if (!sessionStorage.getItem('visited')) {
    sessionStorage.setItem('visited', 'first');
    window.addEventListener('load', function () {
    });
} else {
    loadedPage();
    setTimeout(scrollactive, 100);
}


// scroll
const title_box = document.getElementsByClassName('title_box');

if (window.matchMedia('(max-width: 1279px)').matches) {
} else {
    window.addEventListener('scroll', function () {
        $('.mainvisual').each(function () {
            if (!$(this).hasClass('mainslide')) {
                $(this).removeClass('mainfull');
                $(this).addClass('mainslide');
            }
            else if ($(this).hasClass('mainslide')) {
                $(this).removeClass('mainslide');
                $(this).addClass('mainfull');
            }
        })

        $('.menu').each(function () {
            if (!$(this).hasClass('menu_active')) {
                $(this).removeClass('menu_close');
                $(this).addClass('menu_active');
            }
            else if ($(this).hasClass('menu_active')) {
                $(this).removeClass('menu_active');
                $(this).addClass('menu_close');
            }
        })

        $('.title_box').each(function () {
            if (!$(this).hasClass('letter_change')) {
                $(this).removeClass('letter_return');
                $(this).addClass('letter_change');
            }
            else if ($(this).hasClass('letter_change')) {
                $(this).removeClass('letter_change');
                $(this).addClass('letter_return');
            }
        })

        $('.logo_change_box').each(function () {
            if (!$(this).hasClass('logo_change_active')) {
                $(this).removeClass('logo_change_close');
                $(this).addClass('logo_change_active');
            }
            else if ($(this).hasClass('logo_change_active')) {
                $(this).removeClass('logo_change_active');
                $(this).addClass('logo_change_close');
            }
        })

        $('.sample').each(function () {
            if (!$(this).hasClass('samplefull')) {
                $(this).removeClass('sampleslide');
                $(this).removeClass('sampledefolt');
                $(this).addClass('samplefull');
            }
            else if ($(this).hasClass('samplefull')) {
                $(this).removeClass('samplefull');
                $(this).addClass('sampleslide');
            }
        })

        $('.sample').each(function () {
            if ($(this).hasClass('samplefull')) {
                $('.sample_mainview').removeClass('sample_mainview_slide');
                $('.sample_mainview').addClass('sample_mainview_full');
            }
            else if (!$(this).hasClass('samplefull')) {
                $('.sample_mainview').removeClass('sample_mainview_full');
                $('.sample_mainview').addClass('sample_mainview_slide');
            }
        })

        $('.sample').each(function () {
            if ($(this).hasClass('samplefull')) {
                $('.information').addClass('information_full');
                $('.information').removeClass('information_slide');
            }
            else if (!$(this).hasClass('samplefull')) {
                $('.information').removeClass('information_full');
                $('.information').addClass('information_slide');
            }
        })

        $('.about_container').each(function () {
            if ($(this).hasClass('about_container_full')) {
                $(this).removeClass('about_container_full');
                $(this).addClass('about_container_slide');
            }
            else if (!$(this).hasClass('about_container_full')) {
                $(this).removeClass('about_container_slide');
                $(this).addClass('about_container_full');
            }
        })

        $('.about').each(function () {
            if (!$(this).hasClass('aboutfull')) {
                $(this).removeClass('aboutslide');
                $(this).removeClass('aboutdefolt');
                $(this).addClass('aboutfull');
            }
            else if ($(this).hasClass('aboutfull')) {
                $(this).removeClass('aboutfull');
                $(this).addClass('aboutslide');
            }
        })

        $('.contact').each(function () {
            if (!$(this).hasClass('contactfull')) {
                $(this).removeClass('contactslide');
                $(this).removeClass('contactdefolt');
                $(this).addClass('contactfull');
            }
            else if ($(this).hasClass('contactfull')) {
                $(this).removeClass('contactfull');
                $(this).addClass('contactslide');
            }

        })

    });
}


// orgbtn
const orgbtn = () => {
    $('.title_box').each(function () {
        if (!$(this).hasClass('letter_organize')) {
            $(this).removeClass('letter_down');
            $(this).addClass('letter_organize');
        }
    })

    $('.mainvisual').each(function () {
        if (!$(this).hasClass('mainscroll')) {
            $(this).addClass('mainscroll');
        }
    })

    $('.loading_page').each(function () {
        if (!$(this).hasClass('loading_bg')) {
            $(this).addClass('loading_bg');
        }
    })

    $('.organize_button').each(function () {
        if (!$(this).hasClass('button_none')) {
            $(this).addClass('button_none');
        }
    })

    $('.mouse_main').each(function () {
        if (!$(this).hasClass('mouse_active')) {
            $(this).addClass('mouse_active');
        }
    })

}

const navbtn = () => {
    $('.menu').each(function () {
        if (!$('.mainvisual').hasClass('mainvisual_close')) {
            if (!$(this).hasClass('menu_active')) {
                $(this).removeClass('menu_close');
                $(this).addClass('menu_active');
            } else if ($(this).hasClass('menu_active')) {
                $(this).removeClass('menu_active');
                $(this).addClass('menu_close');
            }
        } else if (!$('.menu').hasClass('menu_content_active')) {
            $('.menu').removeClass('menu_content_close');
            $('.menu').addClass('menu_content_active');
        } else if ($('.menu').hasClass('menu_content_active')) {
            $('.menu').removeClass('menu_content_active');
            $('.menu').addClass('menu_content_close');
        }
    })
    $('.navi').each(function () {
        if (!$(this).hasClass('navi_change')) {
            $(this).removeClass('navi_return');
            $(this).addClass('navi_change');
        } else if ($(this).hasClass('navi_change')) {
            $(this).removeClass('navi_change');
            $(this).addClass('navi_return');
        }
    })



}

// mouse enter
// sample
$(function () {
    if (window.matchMedia('(min-width: 1280px)').matches) {
        $(function () {
            let sample = $('.menu_sample');
            sample.mouseenter(function () {
                sampleopen = setTimeout(function () {
                    $('.sample').each(function () {
                        if (!$(this).hasClass('sample_active')) {
                            $(this).addClass('sample_active');
                        }
                    })
                    $('.about').each(function () {
                        if ($(this).hasClass('about_active')) {
                            $(this).removeClass('about_active');
                            $('.sample_mainview').removeClass('sample_mainview_slide');
                            $('.information').removeClass('information_slide');
                        }
                    })
                    $('.contact').each(function () {
                        if ($(this).hasClass('contact_active')) {
                            $(this).removeClass('contact_active');
                            $('.sample_mainview').removeClass('sample_mainview_slide');
                            $('.information').removeClass('information_slide');
                        }
                    })
                    $('.mainvisual').each(function () {
                        if (!$(this).hasClass('mainvisual_close')) {
                            $(this).addClass('mainvisual_close');
                        }
                    })
                    $('.menu_sample').each(function () {
                        if (!$(this).hasClass('menu_sample_null')) {
                            $(this).addClass('menu_sample_null');
                        }
                    })
                    $('.menu_about').each(function () {
                        if ($(this).hasClass('menu_about_null')) {
                            $(this).removeClass('menu_about_null');
                        }
                    })
                    $('.menu_contact').each(function () {
                        if ($(this).hasClass('menu_contact_null')) {
                            $(this).removeClass('menu_contact_null');
                        }
                    })

                    $('.sample').each(function () {
                        if (!$(this).hasClass('sampledefolt')) {
                            $(this).removeClass('samplefull');
                            $(this).removeClass('sampleslide');
                            $(this).addClass('sampledefolt');

                        }
                    })

                    $('.sample_mainview').each(function () {
                        if ($(this).hasClass('sample_mainview_full')) {
                            $(this).removeClass('sample_mainview_full');
                        }
                    })

                    $('.information').each(function () {
                        if ($(this).hasClass('information_full')) {
                            $(this).removeClass('information_full');
                        }
                    })
                    $('.mouse_menu').each(function () {
                        if (!$(this).hasClass('mouse_default')) {
                            $(this).addClass('mouse_default');
                        }
                    })

                }, 1500);

            }).mouseleave(function () {
                clearTimeout(sampleopen);
            });
        });
    } else {
        $('.menu_sample').click(function () {
            $('.sample').each(function () {
                if (!$(this).hasClass('sample_active')) {
                    $(this).addClass('sample_active');
                }
            })
            $('.about').each(function () {
                if ($(this).hasClass('about_active')) {
                    $(this).removeClass('about_active');
                    $('.sample_mainview').removeClass('sample_mainview_slide');
                    $('.information').removeClass('information_slide');
                }
            })
            $('.contact').each(function () {
                if ($(this).hasClass('contact_active')) {
                    $(this).removeClass('contact_active');
                    $('.sample_mainview').removeClass('sample_mainview_slide');
                    $('.information').removeClass('information_slide');
                }
            })
            $('.mainvisual').each(function () {
                if (!$(this).hasClass('mainvisual_close')) {
                    $(this).addClass('mainvisual_close');
                }
            })
            $('.menu_sample').each(function () {
                if (!$(this).hasClass('menu_sample_null')) {
                    $(this).addClass('menu_sample_null');
                }
            })
            $('.menu_about').each(function () {
                if ($(this).hasClass('menu_about_null')) {
                    $(this).removeClass('menu_about_null');
                }
            })
            $('.menu_contact').each(function () {
                if ($(this).hasClass('menu_contact_null')) {
                    $(this).removeClass('menu_contact_null');
                }
            })

            $('.sample').each(function () {
                if (!$(this).hasClass('sampledefolt')) {
                    $(this).removeClass('samplefull');
                    $(this).removeClass('sampleslide');
                    $(this).addClass('sampledefolt');
                }
            })

            $('.sample_mainview').each(function () {
                if ($(this).hasClass('sample_mainview_full')) {
                    $(this).removeClass('sample_mainview_full');
                }
            })

            $('.information').each(function () {
                if ($(this).hasClass('information_full')) {
                    $(this).removeClass('information_full');
                }
            })
            $('.mouse_menu').each(function () {
                if (!$(this).hasClass('mouse_default')) {
                    $(this).addClass('mouse_default');
                }
            })
            $('.sample').each(function () {
                if ($(this).hasClass('sample_active')) {
                    $('.menu').removeClass('menu_active');
                    $('.menu').removeClass('menu_close');
                }
            })
            $('.navi').each(function () {
                if ($(this).hasClass('navi_change')) {
                    $(this).removeClass('navi_change');
                }
            })
            if (window.matchMedia('(max-width: 1279px)').matches) {
                $('.smart_menu_logo').each(function () {
                    if (!$(this).hasClass('smart_menu_logo_active')) {
                        $(this).addClass('smart_menu_logo_active');
                    }
                })
            }
            $('.menu').each(function () {
                if (!$(this).hasClass('menu_content_default')) {
                    $(this).addClass('menu_content_default');
                }
            })
            $('.menu').each(function () {
                if ($(this).hasClass('menu_content_active')) {
                    $(this).removeClass('menu_content_active');
                }
            })
        })
    }
})


// about
$(function () {
    if (window.matchMedia('(min-width: 1280px)').matches) {
        $(function () {
            let about = $('.menu_about');
            about.mouseenter(function () {
                sampleopen = setTimeout(function () {
                    $('.about').each(function () {
                        if (!$(this).hasClass('about_active')) {
                            $(this).addClass('about_active');
                        }
                    })
                    $('.sample').each(function () {
                        if ($(this).hasClass('sample_active')) {
                            $(this).removeClass('sample_active');
                        }
                    })
                    $('.contact').each(function () {
                        if ($(this).hasClass('contact_active')) {
                            $(this).removeClass('contact_active');
                        }
                    })
                    $('.mainvisual').each(function () {
                        if (!$(this).hasClass('mainvisual_close')) {
                            $(this).addClass('mainvisual_close');
                        }
                    })
                    $('.menu_about').each(function () {
                        if (!$(this).hasClass('menu_about_null')) {
                            $(this).addClass('menu_about_null');
                        }
                    })
                    $('.menu_sample').each(function () {
                        if ($(this).hasClass('menu_sample_null')) {
                            $(this).removeClass('menu_sample_null');
                        }
                    })
                    $('.menu_contact').each(function () {
                        if ($(this).hasClass('menu_contact_null')) {
                            $(this).removeClass('menu_contact_null');
                        }
                    })
                    $('.about_container').each(function () {
                        if ($(this).hasClass('about_container_full')) {
                            $(this).removeClass('about_container_full');
                        }
                    })
                    $('.about_container').each(function () {
                        if ($(this).hasClass('about_container_slide')) {
                            $(this).removeClass('about_container_slide');
                        }
                    })
                    $('.about').each(function () {
                        if (!$(this).hasClass('aboutdefolt')) {
                            $(this).removeClass('aboutfull');
                            $(this).removeClass('aboutslide');
                            $(this).addClass('aboutdefolt');

                        }
                    })
                    $('.mouse_menu').each(function () {
                        if (!$(this).hasClass('mouse_default')) {
                            $(this).addClass('mouse_default');
                        }
                    })
                }, 1500);

            }).mouseleave(function () {
                clearTimeout(sampleopen);
            });
        });
    } else {
        $('.menu_about').click(function () {
            $('.about').each(function () {
                if (!$(this).hasClass('about_active')) {
                    $(this).addClass('about_active');
                }
            })
            $('.sample').each(function () {
                if ($(this).hasClass('sample_active')) {
                    $(this).removeClass('sample_active');
                }
            })
            $('.contact').each(function () {
                if ($(this).hasClass('contact_active')) {
                    $(this).removeClass('contact_active');
                }
            })
            $('.mainvisual').each(function () {
                if (!$(this).hasClass('mainvisual_close')) {
                    $(this).addClass('mainvisual_close');
                }
            })
            $('.menu_about').each(function () {
                if (!$(this).hasClass('menu_about_null')) {
                    $(this).addClass('menu_about_null');
                }
            })
            $('.menu_sample').each(function () {
                if ($(this).hasClass('menu_sample_null')) {
                    $(this).removeClass('menu_sample_null');
                }
            })
            $('.menu_contact').each(function () {
                if ($(this).hasClass('menu_contact_null')) {
                    $(this).removeClass('menu_contact_null');
                }
            })
            $('.about_container').each(function () {
                if ($(this).hasClass('about_container_full')) {
                    $(this).removeClass('about_container_full');
                }
            })
            $('.about_container').each(function () {
                if ($(this).hasClass('about_container_slide')) {
                    $(this).removeClass('about_container_slide');
                }
            })
            $('.about').each(function () {
                if (!$(this).hasClass('aboutdefolt')) {
                    $(this).removeClass('aboutfull');
                    $(this).removeClass('aboutslide');
                    $(this).addClass('aboutdefolt');
                }
            })
            $('.mouse_menu').each(function () {
                if (!$(this).hasClass('mouse_default')) {
                    $(this).addClass('mouse_default');
                }
            })
            $('.about').each(function () {
                if ($(this).hasClass('about_active')) {
                    $('.menu').removeClass('menu_active');
                    $('.menu').removeClass('menu_close');
                }
            })
            $('.navi').each(function () {
                if ($(this).hasClass('navi_change')) {
                    $(this).removeClass('navi_change');
                }
            })
            if (window.matchMedia('(max-width: 1279px)').matches) {
                $('.smart_menu_logo').each(function () {
                    if (!$(this).hasClass('smart_menu_logo_active')) {
                        $(this).addClass('smart_menu_logo_active');
                    }
                })
            }
            $('.menu').each(function () {
                if (!$(this).hasClass('menu_content_default')) {
                    $(this).addClass('menu_content_default');
                }
            })
            $('.menu').each(function () {
                if ($(this).hasClass('menu_content_active')) {
                    $(this).removeClass('menu_content_active');
                }
            })


        })
    }
})


// contact
$(function () {
    if (window.matchMedia('(min-width: 1280px)').matches) {
        $(function () {
            let contact = $('.menu_contact');
            contact.mouseenter(function () {
                sampleopen = setTimeout(function () {
                    $('.contact').each(function () {
                        if (!$(this).hasClass('contact_active')) {
                            $(this).addClass('contact_active');
                        }
                    })
                    $('.sample').each(function () {
                        if ($(this).hasClass('sample_active')) {
                            $(this).removeClass('sample_active');
                        }
                    })
                    $('.about').each(function () {
                        if ($(this).hasClass('about_active')) {
                            $(this).removeClass('about_active');
                        }
                    })
                    $('.mainvisual').each(function () {
                        if (!$(this).hasClass('mainvisual_close')) {
                            $(this).addClass('mainvisual_close');
                        }
                    })
                    $('.menu_contact').each(function () {
                        if (!$(this).hasClass('menu_contact_null')) {
                            $(this).addClass('menu_contact_null');
                        }
                    })
                    $('.menu_sample').each(function () {
                        if ($(this).hasClass('menu_sample_null')) {
                            $(this).removeClass('menu_sample_null');
                        }
                    })
                    $('.menu_about').each(function () {
                        if ($(this).hasClass('menu_about_null')) {
                            $(this).removeClass('menu_about_null');
                        }
                    })

                    $('.mouse_menu').each(function () {
                        if (!$(this).hasClass('mouse_default')) {
                            $(this).addClass('mouse_default');
                        }
                    })
                }, 1500);
            }).mouseleave(function () {
                clearTimeout(sampleopen);
            });
        });
    } else {
        $('.menu_contact').click(function () {
            $('.contact').each(function () {
                if (!$(this).hasClass('contact_active')) {
                    $(this).addClass('contact_active');
                }
            })
            $('.sample').each(function () {
                if ($(this).hasClass('sample_active')) {
                    $(this).removeClass('sample_active');
                }
            })
            $('.about').each(function () {
                if ($(this).hasClass('about_active')) {
                    $(this).removeClass('about_active');
                }
            })
            $('.mainvisual').each(function () {
                if (!$(this).hasClass('mainvisual_close')) {
                    $(this).addClass('mainvisual_close');
                }
            })
            $('.menu_contact').each(function () {
                if (!$(this).hasClass('menu_contact_null')) {
                    $(this).addClass('menu_contact_null');
                }
            })
            $('.menu_sample').each(function () {
                if ($(this).hasClass('menu_sample_null')) {
                    $(this).removeClass('menu_sample_null');
                }
            })
            $('.menu_about').each(function () {
                if ($(this).hasClass('menu_about_null')) {
                    $(this).removeClass('menu_about_null');
                }
            })

            $('.mouse_menu').each(function () {
                if (!$(this).hasClass('mouse_default')) {
                    $(this).addClass('mouse_default');
                }
            })
            $('.contact').each(function () {
                if ($(this).hasClass('contact_active')) {
                    $('.menu').removeClass('menu_active');
                    $('.menu').removeClass('menu_close');
                }
            })
            $('.navi').each(function () {
                if ($(this).hasClass('navi_change')) {
                    $(this).removeClass('navi_change');
                }
            })
            if (window.matchMedia('(max-width: 1279px)').matches) {
                $('.smart_menu_logo').each(function () {
                    if (!$(this).hasClass('smart_menu_logo_active')) {
                        $(this).addClass('smart_menu_logo_active');
                    }
                })
            }
            $('.menu').each(function () {
                if (!$(this).hasClass('menu_content_default')) {
                    $(this).addClass('menu_content_default');
                }
            })
            $('.menu').each(function () {
                if ($(this).hasClass('menu_content_active')) {
                    $(this).removeClass('menu_content_active');
                }
            })
        })
        $('.contact').each(function () {
            if ($(this).hasClass('contactfull')) {
                $(this).removeClass('contactfull');
            }
        })
    }
})



// reroad
$(function () {
    if (window.matchMedia('(min-width: 1280px)').matches) {
        $(function () {
            let contact = $('.menu_reload');
            contact.mouseenter(function () {
                sampleopen = setTimeout(function () {
                    sessionStorage.clear();
                    window.location.reload();
                }, 2500);

            }).mouseleave(function () {
                clearTimeout(sampleopen);
            });
        });
    } else {
        $('.menu_reload').click(function () {
            sessionStorage.clear();
            sampleopen = setTimeout(function () {
                window.location.reload();
            });
        })
    }
})


// loading
$(function () {
    if (window.matchMedia('(min-width: 1280px)').matches) {
        $(function () {
            let sample = $('.menu_sample');
            sample.mouseenter(function () {
                $('.loading').each(function () {
                    if (!$(this).hasClass('loading_active')) {
                        $(this).addClass('loading_active');
                    }
                })
            });
            sample.mouseleave(function () {
                $('.loading').each(function () {
                    if ($(this).hasClass('loading_active')) {
                        $(this).removeClass('loading_active');
                    }
                })
            });
        });

        $(function () {
            let about = $('.menu_about');
            about.mouseenter(function () {
                $('.loading').each(function () {
                    if (!$(this).hasClass('loading_active')) {
                        $(this).addClass('loading_active');
                    }
                })
            });
            about.mouseleave(function () {
                $('.loading').each(function () {
                    if ($(this).hasClass('loading_active')) {
                        $(this).removeClass('loading_active');
                    }
                })
            });
        });

        $(function () {
            let contact = $('.menu_contact');
            contact.mouseenter(function () {
                $('.loading').each(function () {
                    if (!$(this).hasClass('loading_active')) {
                        $(this).addClass('loading_active');
                    }
                })
            });
            contact.mouseleave(function () {
                $('.loading').each(function () {
                    if ($(this).hasClass('loading_active')) {
                        $(this).removeClass('loading_active');
                    }
                })
            });
        });
    } else {
        $('.menu_sample').click(function () {
            $('.loading').each(function () {
                if (!$(this).hasClass('loading_active')) {
                    $(this).addClass('loading_active');
                    setTimeout(function () {
                        $('.loading').removeClass('loading_active');
                    }, 2000)
                }
            });
        })
        $('.menu_about').click(function () {
            $('.loading').each(function () {
                if (!$(this).hasClass('loading_active')) {
                    $(this).addClass('loading_active');
                    setTimeout(function () {
                        $('.loading').removeClass('loading_active');
                    }, 2000)
                }
            });
        })
        $('.menu_contact').click(function () {
            $('.loading').each(function () {
                if (!$(this).hasClass('loading_active')) {
                    $(this).addClass('loading_active');
                    setTimeout(function () {
                        $('.loading').removeClass('loading_active');
                    }, 2000)
                }
            });
        })

    }
})


// 
$(function () {
    if (window.matchMedia('(min-width: 1280px)').matches) {
        $(function () {
            let sample = $('.organize_button');
            sample.mouseenter(function () {
                $('.title_box').each(function () {
                    if (!$(this).hasClass('letter_vib')) {
                        $(this).addClass('letter_vib');
                    }
                })

            }).mouseleave(function () {
                $('.title_box').each(function () {
                    if ($(this).hasClass('letter_vib')) {
                        $(this).removeClass('letter_vib');
                        $(this).removeClass('letter_down');
                        $(this).addClass('letter_down_default');
                    }
                })
            });
        });
    }
})

// sample
// button
const viewchange = () => {
    $('.sample_aquarium').each(function () {
        if (!$(this).hasClass('sample_main_active')) {
            $('.sample_academy').removeClass('sample_main_active');
            $('.sample_portfolio2').removeClass('sample_main_active');
            $('.sample_concentration').removeClass('sample_main_active');
            $(this).addClass('sample_main_active');
        }
    })
    $('.aqua_thumbnail').each(function () {
        if (!$(this).hasClass('thumbnail_bright')) {
            $('.academy_thumbnail').removeClass('thumbnail_bright');
            $('.portfolio_thumbnail').removeClass('thumbnail_bright');
            $('.concentration_thumbnail').removeClass('thumbnail_bright');
            $(this).addClass('thumbnail_bright');
        }
    })

    $('.sample_aquarium').each(function () {
        if ($(this).hasClass('sample_main_active')) {
            $('.sample').removeClass('sample_bg_academy');
            $('.bubble-background').removeClass('bubble_close');
            $('.programlogo-background').removeClass('programlogo-background_active');
            $('.sample').removeClass('sample_bg_portfolio');
            $('.portfolio-background').removeClass('portfolio-background_active');
            $('.sample').removeClass('sample_bg_concentration');
            $('.card-background').removeClass('card-background_active');
        }
    })
    $('.carousel-item').each(function () {
        if ($(this).hasClass('fontwhite')) {
            $(this).removeClass('fontwhite');
        }
    })
}

const viewchange2 = () => {
    $('.sample_academy').each(function () {
        if (!$(this).hasClass('sample_main_active')) {
            $('.sample_aquarium').removeClass('sample_main_active');
            $('.sample_portfolio2').removeClass('sample_main_active');
            $('.sample_concentration').removeClass('sample_main_active');
            $(this).addClass('sample_main_active');
        }
    })
    $('.academy_thumbnail').each(function () {
        if (!$(this).hasClass('thumbnail_bright')) {
            $('.aqua_thumbnail').removeClass('thumbnail_bright');
            $('.portfolio_thumbnail').removeClass('thumbnail_bright');
            $('.concentration_thumbnail').removeClass('thumbnail_bright');
            $(this).addClass('thumbnail_bright');
        }
    })
    $('.sample_academy').each(function () {
        if ($(this).hasClass('sample_main_active')) {
            $('.bubble-background').addClass('bubble_close');
            $('.sample').addClass('sample_bg_academy');
            $('.programlogo-background').addClass('programlogo-background_active');
            $('.sample').removeClass('sample_bg_portfolio');
            $('.portfolio-background').removeClass('portfolio-background_active');
            $('.sample').removeClass('sample_bg_concentration');
            $('.card-background').removeClass('card-background_active');
        }
    })
    $('.carousel-item').each(function () {
        if ($(this).hasClass('fontwhite')) {
            $(this).removeClass('fontwhite');
        }
    })

}

const viewchange3 = () => {
    $('.sample_portfolio2').each(function () {
        if (!$(this).hasClass('sample_main_active')) {
            $('.sample_aquarium').removeClass('sample_main_active');
            $('.sample_academy').removeClass('sample_main_active');
            $('.sample_concentration').removeClass('sample_main_active');
            $(this).addClass('sample_main_active');
        }
    })
    $('.portfolio_thumbnail').each(function () {
        if (!$(this).hasClass('thumbnail_bright')) {
            $('.aqua_thumbnail').removeClass('thumbnail_bright');
            $('.academy_thumbnail').removeClass('thumbnail_bright');
            $('.concentration_thumbnail').removeClass('thumbnail_bright');
            $(this).addClass('thumbnail_bright');
        }
    })
    $('.sample_portfolio2').each(function () {
        if ($(this).hasClass('sample_main_active')) {
            $('.bubble-background').addClass('bubble_close');
            $('.sample').addClass('sample_bg_portfolio');
            $('.programlogo-background').removeClass('programlogo-background_active');
            $('.portfolio-background').addClass('portfolio-background_active');
            $('.sample').removeClass('sample_bg_academy');
            $('.sample').removeClass('sample_bg_concentration');
            $('.card-background').removeClass('card-background_active');
        }
    })
    $('.carousel-item').each(function () {
        if (!$(this).hasClass('fontwhite')) {
            $(this).addClass('fontwhite');
        }
    })
}

const viewchange4 = () => {
    $('.sample_concentration').each(function () {
        if (!$(this).hasClass('sample_main_active')) {
            $('.sample_aquarium').removeClass('sample_main_active');
            $('.sample_academy').removeClass('sample_main_active');
            $('.sample_portfolio2').removeClass('sample_main_active');
            $(this).addClass('sample_main_active');
        }
    })
    $('.concentration_thumbnail').each(function () {
        if (!$(this).hasClass('thumbnail_bright')) {
            $('.aqua_thumbnail').removeClass('thumbnail_bright');
            $('.academy_thumbnail').removeClass('thumbnail_bright');
            $('.portfolio_thumbnail').removeClass('thumbnail_bright');
            $(this).addClass('thumbnail_bright');
        }
    })
    $('.sample_concentration').each(function () {
        if ($(this).hasClass('sample_main_active')) {
            $('.bubble-background').addClass('bubble_close');
            $('.sample').addClass('sample_bg_portfolio');
            $('.programlogo-background').removeClass('programlogo-background_active');
            $('.portfolio-background').removeClass('portfolio-background_active');
            $('.sample').removeClass('sample_bg_academy');
            $('.sample').addClass('sample_bg_concentration');
            $('.card-background').addClass('card-background_active');
        }
    })
    $('.carousel-item').each(function () {
        if (!$(this).hasClass('fontwhite')) {
            $(this).addClass('fontwhite');
        }
    })

}

// contact
// button
const formbtn = () => {
    $('form').each(function () {
        if (!$(this).hasClass('form_active')) {
            $('.mailtel_box').removeClass('mailtel_box_active');
            $(this).addClass('form_active');
        }
    })

    $('.formbtn').each(function () {
        if (!$(this).hasClass('formbtn_active')) {
            $('.mailbtn').removeClass('mailbtn_active');
            $(this).addClass('formbtn_active');
        }
    })
}

const mailbtn = () => {
    $('.mailtel_box').each(function () {
        if (!$(this).hasClass('mailtel_box_active')) {
            $('form').removeClass('form_active');
            $(this).addClass('mailtel_box_active');
        }
    })

    $('.mailbtn').each(function () {
        if (!$(this).hasClass('mailbtn_active')) {
            $('.formbtn').removeClass('formbtn_active');
            $(this).addClass('mailbtn_active');
        }
    })
}




// スライダー
$(document).ready(function () {
    let slideIndex = 0;
    const slides = $(".carousel-item");
    const totalSlides = slides.length;
    const indicatorsContainer = $(".carousel-indicators");

    // インジケーターの生成
    for (let i = 0; i < totalSlides; i++) {
        const indicator = $("<div>").addClass("carousel-indicator");
        if (i === 0) indicator.addClass("active");
        indicatorsContainer.append(indicator);
    }
    const indicators = $(".carousel-indicator");

    function showSlide(index) {
        slides.each(function (i) {
            $(this).css("transition", "none"); // 一旦アニメーションを無効にする
            if (i === index) {
                $(this).css({ left: "100%", opacity: "1" }); // 右側に配置
            }
        });

        // アニメーションを有効にしてスライドイン
        setTimeout(function () {
            slides.each(function (i) {
                $(this).css(
                    "transition",
                    "left 0.5s ease-in-out, opacity 0.5s ease-in-out"
                );
                if (i === index) {
                    $(this).css({ left: "0%" }); // 現在のスライドを表示
                } else {
                    $(this).css({ left: "-100%", opacity: "0" }); // 左に移動して非表示にする
                }
            });
        }, 100);

        indicators.removeClass("active").eq(index).addClass("active");
    }

    // 最初のスライドを表示
    showSlide(slideIndex);

    $(".nextBtn").click(function () {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    });

    $(".prevBtn").click(function () {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    });

    indicators.click(function () {
        const index = indicators.index(this);
        slideIndex = index;
        showSlide(slideIndex);
    });
});

// smart layout
$(function () {
    if (window.matchMedia('(max-width: 1279px)').matches) {
        if (!$('.logo_change_box').hasClass('logo_change_active')) {
            $('.logo_change_box').addClass('logo_change_active');
        }
    } else {
        if ($('.title_box').hasClass('letter_test')) {
            $('.title_box').removeClass('letter_test');
        }
    }
})


// aquarium background
// =========泡
document.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.bubble-background');

    // 泡を生成する関数
    const createBubble = () => {
        const bubbleEl = document.createElement('span');
        bubbleEl.className = 'bubble';
        const minSize = 10;
        const maxSize = 50;
        const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        bubbleEl.style.width = `${size}px`;
        bubbleEl.style.height = `${size}px`;
        bubbleEl.style.left = Math.random() * innerWidth + 'px';
        section.appendChild(bubbleEl);

        // 一定時間が経てば泡を消す
        setTimeout(() => {
            bubbleEl.remove();
        }, 15000);
    }

    // 泡の生成を開始するトリガー（初期値はOFF）
    let activeBubble = null;

    // 泡の生成をストップする関数
    const stopBubble = () => {
        clearInterval(activeBubble);
    };

    // Intersection observerに渡すコールバック関数
    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeBubble = setInterval(createBubble, 300);
            } else {
                stopBubble();
            }
        })
    };

    // Intersection observerに渡すオプション
    const options = {
        rootMargin: "100px 0px"
    }

    // Intersection observerの初期化
    const io = new IntersectionObserver(cb, options);
    io.POLL_INTERVAL = 100; // Polyfill
    io.observe(section);
});
// =========泡 end


// academy background
// =========ロゴ
// logo1
document.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.card-background');

    // 泡を生成する関数
    const createBubble = () => {
        const programlogoEl = document.createElement('span');
        programlogoEl.className = 'card';
        const minSize = 30;
        const maxSize = 100;
        const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        programlogoEl.style.width = `${size}px`;
        programlogoEl.style.height = `${size}px`;
        programlogoEl.style.left = Math.random() * innerWidth + 'px';
        // programlogoEl.style.bottom = Math.random() * innerHeight + 'px';
        section.appendChild(programlogoEl);

        // 一定時間が経てば泡を消す
        setTimeout(() => {
            programlogoEl.remove();
        }, 11000);
    }

    // 泡の生成を開始するトリガー（初期値はOFF）
    let activeBubble = null;

    // 泡の生成をストップする関数
    const stopBubble = () => {
        clearInterval(activeBubble);
    };

    // Intersection observerに渡すコールバック関数
    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeBubble = setInterval(createBubble, 2000);
            } else {
                stopBubble();
            }
        })
    };

    // Intersection observerに渡すオプション
    const options = {
        rootMargin: "100px 0px"
    }

    // Intersection observerの初期化
    const io = new IntersectionObserver(cb, options);
    io.POLL_INTERVAL = 100; // Polyfill
    io.observe(section);
});

// =========ロゴ end

// portfolio background
// line1
document.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.portfolio-background');

    // 泡を生成する関数
    const createBubble = () => {
        const programlogoEl = document.createElement('span');
        programlogoEl.className = 'portfolio_line';
        const minSize = 50;
        const maxSize = 50;
        const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        programlogoEl.style.width = `${size}px`;
        programlogoEl.style.height = `${size}px`;
        programlogoEl.style.bottom = Math.random() * innerHeight + 'px';
        section.appendChild(programlogoEl);

        // 一定時間が経てば泡を消す
        setTimeout(() => {
            programlogoEl.remove();
        }, 12000);
    }

    // 泡の生成を開始するトリガー（初期値はOFF）
    let activeBubble = null;

    // 泡の生成をストップする関数
    const stopBubble = () => {
        clearInterval(activeBubble);
    };

    // Intersection observerに渡すコールバック関数
    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeBubble = setInterval(createBubble, 9000);
            } else {
                stopBubble();
            }
        })
    };

    // Intersection observerに渡すオプション
    const options = {
        rootMargin: "100px 0px"
    }

    // Intersection observerの初期化
    const io = new IntersectionObserver(cb, options);
    io.POLL_INTERVAL = 100; // Polyfill
    io.observe(section);
});

// line2
document.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.portfolio-background');

    // 泡を生成する関数
    const createBubble = () => {
        const programlogoEl = document.createElement('span');
        programlogoEl.className = 'portfolio_line2';
        const minSize = 50;
        const maxSize = 50;
        const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        programlogoEl.style.width = `${size}px`;
        programlogoEl.style.height = `${size}px`;
        programlogoEl.style.left = Math.random() * innerWidth + 'px';
        section.appendChild(programlogoEl);

        // 一定時間が経てば泡を消す
        setTimeout(() => {
            programlogoEl.remove();
        }, 12000);
    }

    // 泡の生成を開始するトリガー（初期値はOFF）
    let activeBubble = null;

    // 泡の生成をストップする関数
    const stopBubble = () => {
        clearInterval(activeBubble);
    };

    // Intersection observerに渡すコールバック関数
    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeBubble = setInterval(createBubble, 9000);
            } else {
                stopBubble();
            }
        })
    };

    // Intersection observerに渡すオプション
    const options = {
        rootMargin: "100px 0px"
    }

    // Intersection observerの初期化
    const io = new IntersectionObserver(cb, options);
    io.POLL_INTERVAL = 100; // Polyfill
    io.observe(section);
});

// =========カード
// logo1
document.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.programlogo-background');

    // 泡を生成する関数
    const createBubble = () => {
        const programlogoEl = document.createElement('span');
        programlogoEl.className = 'programlogo';
        const minSize = 50;
        const maxSize = 50;
        const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        programlogoEl.style.width = `${size}px`;
        programlogoEl.style.height = `${size}px`;
        programlogoEl.style.left = Math.random() * innerWidth + 'px';
        programlogoEl.style.bottom = Math.random() * innerHeight + 'px';
        section.appendChild(programlogoEl);

        // 一定時間が経てば泡を消す
        setTimeout(() => {
            programlogoEl.remove();
        }, 6000);
    }

    // 泡の生成を開始するトリガー（初期値はOFF）
    let activeBubble = null;

    // 泡の生成をストップする関数
    const stopBubble = () => {
        clearInterval(activeBubble);
    };

    // Intersection observerに渡すコールバック関数
    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeBubble = setInterval(createBubble, 800);
            } else {
                stopBubble();
            }
        })
    };

    // Intersection observerに渡すオプション
    const options = {
        rootMargin: "100px 0px"
    }

    // Intersection observerの初期化
    const io = new IntersectionObserver(cb, options);
    io.POLL_INTERVAL = 100; // Polyfill
    io.observe(section);
});

// logo2
document.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.programlogo-background');

    // 泡を生成する関数
    const createBubble = () => {
        const programlogo2El = document.createElement('span');
        programlogo2El.className = 'programlogo2';
        const minSize = 50;
        const maxSize = 50;
        const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        programlogo2El.style.width = `${size}px`;
        programlogo2El.style.height = `${size}px`;
        programlogo2El.style.left = Math.random() * innerWidth + 'px';
        programlogo2El.style.bottom = Math.random() * innerHeight + 'px';
        section.appendChild(programlogo2El);

        // 一定時間が経てば泡を消す
        setTimeout(() => {
            programlogo2El.remove();
        }, 6000);
    }

    // 泡の生成を開始するトリガー（初期値はOFF）
    let activeBubble = null;

    // 泡の生成をストップする関数
    const stopBubble = () => {
        clearInterval(activeBubble);
    };

    // Intersection observerに渡すコールバック関数
    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeBubble = setInterval(createBubble, 800);
            } else {
                stopBubble();
            }
        })
    };

    // Intersection observerに渡すオプション
    const options = {
        rootMargin: "100px 0px"
    }

    // Intersection observerの初期化
    const io = new IntersectionObserver(cb, options);
    io.POLL_INTERVAL = 100; // Polyfill
    io.observe(section);
});

// logo3
document.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.programlogo-background');

    // 泡を生成する関数
    const createBubble = () => {
        const programlogo3El = document.createElement('span');
        programlogo3El.className = 'programlogo3';
        const minSize = 50;
        const maxSize = 50;
        const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        programlogo3El.style.width = `${size}px`;
        programlogo3El.style.height = `${size}px`;
        programlogo3El.style.left = Math.random() * innerWidth + 'px';
        programlogo3El.style.bottom = Math.random() * innerHeight + 'px';
        section.appendChild(programlogo3El);

        // 一定時間が経てば泡を消す
        setTimeout(() => {
            programlogo3El.remove();
        }, 6000);
    }

    // 泡の生成を開始するトリガー（初期値はOFF）
    let activeBubble = null;

    // 泡の生成をストップする関数
    const stopBubble = () => {
        clearInterval(activeBubble);
    };

    // Intersection observerに渡すコールバック関数
    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeBubble = setInterval(createBubble, 800);
            } else {
                stopBubble();
            }
        })
    };

    // Intersection observerに渡すオプション
    const options = {
        rootMargin: "100px 0px"
    }

    // Intersection observerの初期化
    const io = new IntersectionObserver(cb, options);
    io.POLL_INTERVAL = 100; // Polyfill
    io.observe(section);
});

// logo4
document.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.programlogo-background');

    // 泡を生成する関数
    const createBubble = () => {
        const programlogo4El = document.createElement('span');
        programlogo4El.className = 'programlogo4';
        const minSize = 50;
        const maxSize = 50;
        const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        programlogo4El.style.width = `${size}px`;
        programlogo4El.style.height = `${size}px`;
        programlogo4El.style.left = Math.random() * innerWidth + 'px';
        programlogo4El.style.bottom = Math.random() * innerHeight + 'px';
        section.appendChild(programlogo4El);

        // 一定時間が経てば泡を消す
        setTimeout(() => {
            programlogo4El.remove();
        }, 6000);
    }

    // 泡の生成を開始するトリガー（初期値はOFF）
    let activeBubble = null;

    // 泡の生成をストップする関数
    const stopBubble = () => {
        clearInterval(activeBubble);
    };

    // Intersection observerに渡すコールバック関数
    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeBubble = setInterval(createBubble, 600);
            } else {
                stopBubble();
            }
        })
    };

    // Intersection observerに渡すオプション
    const options = {
        rootMargin: "100px 0px"
    }

    // Intersection observerの初期化
    const io = new IntersectionObserver(cb, options);
    io.POLL_INTERVAL = 100; // Polyfill
    io.observe(section);
});
// =========カード end

// form
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            const xhr = new XMLHttpRequest();

            xhr.open('POST', 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdJNL5rQiXP0JKDqc4_vITmdnqtRJCt0Q23WuodeFKB85nm7A/formResponse', true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) { // 4はリクエスト完了を意味します
                    document.querySelector(".end-message").style.display = 'flex';
                    document.querySelector(".submit-btn").style.display = 'none';
                    // window.location.href = "thanks.html";

                    // 以下の行でフォームの入力をリセットします
                    form.reset();
                }
            };

            xhr.send(formData);
        });
    }

});




const returnbtn = () => {
    window.location.reload();
}
