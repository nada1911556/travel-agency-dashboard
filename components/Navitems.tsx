import React from 'react'
import {Link, NavLink} from "react-router";
import {sidebarItems} from "~/constants";
import {cn} from "../lib/utils";

// @ts-ignore
const Navitems = ({handleClick}:{handileClick?:()=>void}) => {
    const user={
        imageUrl:"/assets/images/david.webp",
        name:"David",
        email:"contact@gmail.com",
    }
    return (
        <section className="nav-items">
            <Link to='/' className='link-logo'>
                <img src='/assets/icons/logo.svg' alt="logo"
                     className="size-[30px" />
                <h1>TourVisto</h1>
            </Link>
            <div className="container text-dark-200">
                <nav>
                    {sidebarItems.map(({id,icon,href,label})=>(
                        <NavLink to={href} key={id}>{({isActive }:{isActive:boolean})=>(
                            <div className={cn('group nav-item',{'bg-primary-100 !text-white':isActive})}>
                                <img src={icon} alt={label} className={`group-hover:brightness-0 size-0 
                                group-hover:invert ${isActive ? 'brightness-0':'text-dark-200'}`} />
                                {label}
                            </div>
                        )}
                        </NavLink>
                    ))}
                </nav>
                <footer className="nav-footer">
                    <img src={user?.imageUrl || '/assets/images/david.webp'} alt={user?.name}/>
                    <article>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </article>
                    <button className="cursor-pointer">
                        <img src="/assets/icons/logout.svg" alt="logout" className="size-6"/>
                    </button>
                </footer>
            </div>
        </section>
    )
}
export default Navitems