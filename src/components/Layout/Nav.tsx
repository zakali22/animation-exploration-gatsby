import * as React from "react"
import { useThemeContext } from "../../context/ThemeContext"

const Nav = () => {
    const {theme, updateTheme} = useThemeContext()
    // const ref = React.useRef<HTMLButtonElement>(null)

    function handleThemeToggle(){
        updateTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <nav className={`nav ${theme === 'dark' ? 'inverted' : ''}`}>
            <div className="nav-container container">
                <a href="/" className="nav-logo">animations</a>
                <button className="nav-theme-toggle" onClick={handleThemeToggle}>
                    <div className="nav-theme-toggle__dark">
                        <img src="data:image/png;base64,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" />
                    </div>
                    <div className="nav-theme-toggle__light">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFiUlEQVR4nO1bW28bRRReLqLQAqItlyIhIZBAUIlK/ARAgIRE+xQEbeIZx7ObpDT0AjyUW34DpaQgISGoRFEeq+AZJ5UCubQUkBBNABWeIUShnsUqu45myKCz3nXcJt5d23txEn/SvNjrmXO+OXP2XMaa1kEHqUFSNCMpntY2KyTDCoZS2g3aZoTsEIA7FiA36hFQfw/eGdURUH8YW7X1BNvUD1qc/Fcu5l5slYByUd8Lc9mc6Np6gc0NYpu6sk0y1SoBMIczFyc5LU2ofPYeWcgeVeM9OwOfXTh4u2USEwS/ynufbJaApWJuD8wBc6n57m2B65417pYMHVGj+7drUUNSfMwRmKJZICPoeYuTDxzhOfnIZ85pv0AIfuvO8X7QeqrQfS/IVpERH9Oihhrv2bmyQDAJ5VLfbovryzbX/2p2TfgtzFEu5R4PrzyaBUvQYjsGDF2ChQTFv6pRtMvvedvU+yyTHGh2PZvnsrZJ+qOUqWWoJhdUY/gRyfAhQfEZSfGPgqIrgiLhjivOZwx9IVl2QI1nH45TlpahQi6sJoZulvlst2T4gufwwgxB8bLjH/LoZTU0dGMrMsQGVXvuGP5J5Qe31H4v8vgFQdHvjSheh4xfRB49c63yg1tgTfeZOZAlUeWvIYGhS4Jhy3OKqtC9TTD8aauKryKC4VNqAt3qrMFyOwTFV2Ht1JSv3Q0vNgAzhLMctfLVQfFFz8MDCddbXapQo2iXoOg3fyWyEVgC+jm211yzALP33flxQ8nJN5Q8/46S430RWAL61jsOscM29T7bJAaEt/We8T3zXx+pKA5j5i0lx/SIfAL6sJ48IGslH/GPIQIB8beTibnxuMX1E9dHZYLi59cUstCr5JS76zNvKzlxWEnWG61jLOCna2Upl4zHQEYvDwHZ/TYuFCAdrWZkzqT6sm0aA957vu6rbupNV/njlSMQj2Oc8+IE2ySDFdkqcoLMQel4Q1gqGk9YXD9lc/InhKjwmWSZjK/ZTx9XciwXl/KuP8BdIAuYu83JAsgIWaSWBCTFF9d0eJ7Zx7fztQR8o6UB9VXPo2sKNOma/sRr8Svvhs1qtPfBxAmQDA2uFii74u0jdnj+AyVfLhMUfbmmMOf6I3vVNWAFnyVOgHQzsfYY6LvECRAMF9NXvGoBCy0rJCH/Dlqspn4HhYy2IYBhq6oHw+eD9UAzG4sAiu0VPdBMI3o0jQ13BBpFTUVmkzpBis+0jQUw/HniBEiGD7WRBSQfCKlKmTt15VMLhQGNlrvXdTK0VMztcXp1nMxbprHfIaBS80+bACcdBpkgVbc4GYbUPTLFy0Wyb1VBhBukWhBh+HJ6yqPZakGEG2R1QYTsa0l50xzY7k1atyRWyDyX2vkPLInpy5yju1oiwTbJq8BuQFH0k8SVDyyKEh1k15KAOmtslRT/kCABF9qqKQKAFlUS/gB6hW3VGFHQGmO5HTUN0+9j3fl2ao2panMUldRExdmoka7bBMUfR7zry4Lhk57C1eYovAXO5e5LT3la0x4f6bql9nvB8LPQt4+AgDnBMk/5tseTJkGFvSAx0nWTpNlXIP92Lj00sOOSoUlJMy+FviBBD9wfu+ItXZEpdD8kKe4TDJ2GN4ZgaFEwVHbHovvZaVlARtjYPnESVMOXpEi/VSSZZtezigaC5mxbkKDgEmJT1+TIfLNrOnlHu1yTkxS9G1Z5gMX1k26HdrjunFDAXKtAWZ2DDLsh7YnGnDJ6XYsaKk8ekAy9F4Zd96rsPyC8X6My6KqsZ0WWqZfUYu8doa/Kph0o2dXL0vqk33NBBLTVZelG8C/Xjzpnt6jvbZUASGnduQ5r6wmlUrCfCENA2LnWJWRIAjYsZIcA3LEAuamPAIWGLPL9X1EHHWix4n8KfQSXn9iGfAAAAABJRU5ErkJggg==" />
                    </div>
                </button>
            </div>
        </nav>

    )
}

export default Nav