import React, { useState} from "react";
import { Searchbar } from 'react-native-paper';
import { Container, Content } from "../../component/ui/containers";
import { MainHeader } from "../../component/header";
import { View, Image, Text } from "react-native";
const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <Container>
            <MainHeader>
            </MainHeader>
            <Content>
            <Searchbar
                placeholder="Search for location"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../../assets/search.png')} style={{width: 300, height:300}}/>
                <Text>Search for location</Text>
            </View>
            </Content>
        </Container>
    )
}

export default Search;