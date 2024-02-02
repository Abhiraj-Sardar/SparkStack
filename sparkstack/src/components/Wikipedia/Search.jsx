import React,{useState} from 'react'
import { Input, Button, ChakraProvider } from '@chakra-ui/react';
import Card from "./Card"

const Search = () => {
    const [searchInfo,setSearchInfo]=useState("");
    const [results,setResults]=useState([]);
    const [searchInfoResults,setSearchInfoResults]=useState({});
    const handleSearch= async (e)=>{
        e.preventDefault();
        if (searchInfo==="")
        {
            return;
        }
        const url=`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchInfo}`;
        const response = await fetch(url);

        if(!response.ok)
        {
            throw Error(response.statusText);
        }

        const ResultJson = await response.json();

        setResults(ResultJson.query.search);
        setSearchInfoResults(ResultJson.query.searchinfo);
        console.log(ResultJson);
    }
    return (
        <>
            <form onSubmit={handleSearch}>
                <ChakraProvider>
                    <Input
                        isInvalid
                        className='searchbar mt-5'
                        errorBorderColor='red.300'
                        placeholder='What You Want To Search ?'
                        height="2rem" width='40rem'
                        value={searchInfo}
                        onChange={(e)=>{setSearchInfo(e.target.value)}}
                    />
                    <Button type="submit" className='btn' colorScheme='blue' height={9}>Search</Button>
                </ChakraProvider>
            </form>
            <div className="row">
            <div className="col-12 search-results-list">
            {(searchInfoResults.totalhits) ? <p style={{color:'#FF004D',fontFamily:'TimesNewRoman',fontSize:'18px',fontWeight:'bold'}}>Search Results : {searchInfoResults.totalhits}</p> : ""}
            {
                results.map((item,i)=>{
                    const page=`https://en.wikipedia.org/?curid=${item.pageid}`;
                    return(
                        <center>
                        <Card title={item.title} key={i} desc={item.snippet} visit={page}/>
                        </center>
                    )
                })
            }
            </div>
        </div>
        </>
    )
}

export default Search
