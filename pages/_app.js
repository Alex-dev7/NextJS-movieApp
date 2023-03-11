import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import "../styles/globals.css"

export default function App({Component, pageProps}){

    return (<>
       <Layout>
            <Component {...pageProps} />
                  
       </Layout>


    </>
    )
}



{/* you can add the global styles here as well */}  
{/* <style jsx global>{`
nav {
 background-color: tomato;
}
a {
 text-decoration: none !important;
 color: green;
}
.active {
 color: white;
}
`}</style> */}