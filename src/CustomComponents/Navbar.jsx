// import {
//     Menubar,
//     MenubarCheckboxItem,
//     MenubarContent,
//     MenubarItem,
//     MenubarMenu,
//     MenubarRadioGroup,
//     MenubarRadioItem,
//     MenubarSeparator,
//     MenubarShortcut,
//     MenubarSub,
//     MenubarSubContent,
//     MenubarSubTrigger,
//     MenubarTrigger,
// } from "@/components/ui/menubar"z

// export function MenubarDemo() {
//     return (
//         <div className="flex items-center justify-center">
//             <Menubar className="bg-gray-800 text-white border border-gray-700">
//                 <MenubarMenu>
//                     <MenubarTrigger>File</MenubarTrigger>
//                     <MenubarContent>
//                         <MenubarItem>
//                             New Tab <MenubarShortcut>⌘T</MenubarShortcut>
//                         </MenubarItem>
//                         <MenubarItem>
//                             New Window <MenubarShortcut>⌘N</MenubarShortcut>
//                         </MenubarItem>
//                         <MenubarItem disabled>New Incognito Window</MenubarItem>
//                         <MenubarSeparator />
//                         <MenubarSub>
//                             <MenubarSubTrigger>Share</MenubarSubTrigger>
//                             <MenubarSubContent>
//                                 <MenubarItem>Email link</MenubarItem>
//                                 <MenubarItem>Messages</MenubarItem>
//                                 <MenubarItem>Notes</MenubarItem>
//                             </MenubarSubContent>
//                         </MenubarSub>
//                         <MenubarSeparator />
//                         <MenubarItem>
//                             Print... <MenubarShortcut>⌘P</MenubarShortcut>
//                         </MenubarItem>
//                     </MenubarContent>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                     <MenubarTrigger>Edit</MenubarTrigger>
//                     <MenubarContent>
//                         <MenubarItem>
//                             Undo <MenubarShortcut>⌘Z</MenubarShortcut>
//                         </MenubarItem>
//                         <MenubarItem>
//                             Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
//                         </MenubarItem>
//                         <MenubarSeparator />
//                         <MenubarSub>
//                             <MenubarSubTrigger>Find</MenubarSubTrigger>
//                             <MenubarSubContent>
//                                 <MenubarItem>Search the web</MenubarItem>
//                                 <MenubarSeparator />
//                                 <MenubarItem>Find...</MenubarItem>
//                                 <MenubarItem>Find Next</MenubarItem>
//                                 <MenubarItem>Find Previous</MenubarItem>
//                             </MenubarSubContent>
//                         </MenubarSub>
//                         <MenubarSeparator />
//                         <MenubarItem>Cut</MenubarItem>
//                         <MenubarItem>Copy</MenubarItem>
//                         <MenubarItem>Paste</MenubarItem>
//                     </MenubarContent>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                     <MenubarTrigger>View</MenubarTrigger>
//                     <MenubarContent>
//                         <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
//                         <MenubarCheckboxItem checked>
//                             Always Show Full URLs
//                         </MenubarCheckboxItem>
//                         <MenubarSeparator />
//                         <MenubarItem inset>
//                             Reload <MenubarShortcut>⌘R</MenubarShortcut>
//                         </MenubarItem>
//                         <MenubarItem disabled inset>
//                             Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
//                         </MenubarItem>
//                         <MenubarSeparator />
//                         <MenubarItem inset>Toggle Fullscreen</MenubarItem>
//                         <MenubarSeparator />
//                         <MenubarItem inset>Hide Sidebar</MenubarItem>
//                     </MenubarContent>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                     <MenubarTrigger>Profiles</MenubarTrigger>
//                     <MenubarContent>
//                         <MenubarRadioGroup value="benoit">
//                             <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
//                             <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
//                             <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
//                         </MenubarRadioGroup>
//                         <MenubarSeparator />
//                         <MenubarItem inset>Edit...</MenubarItem>
//                         <MenubarSeparator />
//                         <MenubarItem inset>Add Profile...</MenubarItem>
//                     </MenubarContent>
//                 </MenubarMenu>
//             </Menubar>

//         </div>
//     )
// }
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { User } from 'lucide-react'

const Navbar = () => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    const location = useLocation()

    const profilePicUrl = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"

    const handleSignIn = () => {
        setIsSignedIn(true)
    }

    const handleSignOut = () => {
        setIsSignedIn(false)
    }

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-blue-600">Logo</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-8">
                        <Link
                            to="/"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/'
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/page2"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/page2'
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                        >
                            Page 2
                        </Link>
                        <Link
                            to="/page3"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/page3'
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                        >
                            Page 3
                        </Link>
                    </div>

                    {/* Auth Section */}
                    <div className="flex items-center space-x-4">
                        {isSignedIn ? (
                            <div className="flex items-center space-x-3">
                                <img
                                    src={profilePicUrl}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer hover:border-blue-600 transition-colors"
                                />
                                <button
                                    onClick={handleSignOut}
                                    className="text-sm text-gray-700 hover:text-blue-600 font-medium"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={handleSignIn}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={handleSignIn}
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Sign Up
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar