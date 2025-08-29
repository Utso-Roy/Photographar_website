'use client'
import React from 'react'
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';

export default function Home() {

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: () => { console.log('Home clicked'); }
        },
        {
            label: 'Products',
            icon: 'pi pi-fw pi-box',
            items: [
                { label: 'Product 1', command: () => { console.log('Product 1 clicked'); } },
                { label: 'Product 2', command: () => { console.log('Product 2 clicked'); } },
            ]
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info-circle',
            command: () => { console.log('About clicked'); }
        }
    ];

  return (
    <div className="p-5">
      <h1>Home page</h1>

      <Button label="Click Me" icon="pi pi-check" className="p-button-success" />

      <div className='my-10'>
       
        <Menubar model={items} />
      </div>
    </div>
  )
}
