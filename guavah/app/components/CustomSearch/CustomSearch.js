import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import colors from "../../config/colors/colors";

const CustomSearch = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {

    console.log(searchPhrase);
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true)
          }}
          onSubmitEditing = {() => {
            alert(`Your message is ${searchPhrase}`)
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
            style = {styles.cancel}
          ></Button>
        </View>
      )}
    </View>
  );
};
export default CustomSearch;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    
  },
  searchBar__unclicked: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 35,
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.background,
    borderRadius: 4,
    alignItems: "center",
  },
  searchBar__clicked: {
    paddingLeft: 15,
    paddingRight: 10,
    height: 35,
    flexDirection: "row",
    width: "83%",
    backgroundColor: colors.background,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  cancel: {
    color: colors.accent
  }
});