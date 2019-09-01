import React, { createContext } from "react"

export const LanguageContext = createContext({
	language: "en",
	strings: {},
	setLanguage: () => {}
})

export const LanguageProvider = ({ children }) => {
	const context = {}
	return (
		<LanguageContext.Provider value={context}>
			{children}
		</LanguageContext.Provider>
	)
}
