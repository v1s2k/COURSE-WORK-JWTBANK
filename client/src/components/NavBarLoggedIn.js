import React from 'react'

import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

const NavBarLoggedIn = () => {
  const props = {
    items: [
      {
        text: 'Профиль',
        link: '/profile'
      },
      {
        text: 'Переводы',
        link: '/transfer'
      },
      {
        text: 'История переводов',
        link: '/transactions'
      },
      {
        text: 'Вклады',
        link: '/fixeddeposit'
      },
      {
        text: 'Выйти',
        link: '/'
      }
    ],
    logo: {
      text: 'FRZ BANK',
      link: '/'
    },
    style: {
      barStyles: {
        background: 'linear-gradient(90deg, rgba(49, 28, 125, 1) 0%, rgba(74, 28, 130, 1) 15%, rgba(115, 33, 190, 1) 50%, rgba(195, 10, 122, 1) 100%)',
        fontFamily: "Mistral, sans-serif",
      },
      sidebarStyles: {
        background: '#238',
        buttonColor: '#171'
      }
    }
  }
  return <Navbar {...props} />
}

export default NavBarLoggedIn;