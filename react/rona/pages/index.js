import styled, { createGlobalStyle } from 'styled-components'
import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'
// css in js   js代码里写css
// 首字母大写
const Wrapper = styled.div`
    color: blue;
`
const GlobalStyle = createGlobalStyle`
    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export default function IndexPage() {
    return (
        <div>Next, ssr in react!
            <GlobalStyle />
            {/* <Wrapper>
                Hello World
            </Wrapper> */}
            <Stats
                url="https://covid19.mathdro.id/api">
            </Stats>
            <CountrySelector></CountrySelector>
        </div>
    )
}