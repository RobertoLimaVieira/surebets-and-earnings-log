import { AlignJustify, TrendingUp, User2Icon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

interface HeaderProps {
    userName?: string
    onMenuClick?: () => void
    onProfileClick?: () => void
}

export function Header({ userName = "User Name", onMenuClick, onProfileClick }: HeaderProps) {

    return (
        <>
            <header className="bg-zinc-800 text-white p-4">
                <div className="flex items-center justify-between mx-auto">
                    {/* Left Selection */}
                    <div className="flex items-center gap-4 md:gap-8">

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onMenuClick}
                            className="group rounded-md bg-transparent hover:bg-zinc-700 transition-colors duration-200"
                            aria-label="Open menu"
                        >
                            <AlignJustify className="h-5 w-5 text-zinc-200 group-hover:text-white" />
                        </Button>

                        {/* Logo section */}
                        <div className="flex items-center gap-3">
                            <div className="bg-zinc-50 rounded-lg p-2 shadow-sm">
                                <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-zinc-800" />
                            </div>
                            <a href="#" className="font-bold text-xl md:text-2xl hover:text-zinc-200 transition-colors duration-200" aria-label="Home page go">Surebets</a>
                        </div>
                    </div>

                    
                        {/* Right Selection - User profile*/}
                        <button
                            type="button"
                            onClick={onProfileClick}
                            className="group flex items-center gap-3 hover:bg-zinc-700/50 transition-all duration-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                            aria-label={`Perfil do usuário: ${userName}`}
                        >
                            <div className="border border-zinc-400 group-hover:border-zinc-300 group-focus:border-zinc-300 rounded-full p-2 transition-colors duration-200">
                                <User2Icon className="h-5 w-5 text-zinc-200 group-hover:text-white group-focus:text-white" />
                            </div>
                            <span className="text-zinc-200 group-hover:text-white group-focus:text-white font-medium hidden sm:block">
                                {userName}
                            </span>
                        </button>
                    
                </div>

            </header>
        </>
    )
}
