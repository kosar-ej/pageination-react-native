import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
const MyPageination = () => {
    const GlobalStyles = require('../Styles/Global');
    const ComponentStyles = require('../Styles/Components')
    const [maxPage, setMaxPage] = useState([1, 2, 3, 4])
    const [totalPage, setTotalPage] = useState(1)
    return (
        <View style={GlobalStyles.flex_large}>
            <TouchableOpacity onPress={() => { setTotalPage(totalPage != 1 ? totalPage - 1 : totalPage) }}>
                <Text style={totalPage != 1 ? GlobalStyles.text_secondary : GlobalStyles.text_gray}>
                    &raquo;
                </Text>
            </TouchableOpacity>
            {
                maxPage.map((item) => {
                    return (
                        <TouchableOpacity style={item == totalPage && ComponentStyles.ActivePageination} key={item} onPress={() => { setTotalPage(item) }}>
                            <Text style={item == totalPage ? ComponentStyles.ActivePageination.Title : GlobalStyles.text_gray}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
            <TouchableOpacity onPress={() => { setTotalPage(totalPage != maxPage.length ? totalPage + 1 : totalPage) }}>
                <Text style={totalPage != maxPage.length ? GlobalStyles.text_secondary : GlobalStyles.text_gray}>
                    &laquo;
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default MyPageination;