package step_definitions;

import io.cucumber.java.en.Given;
import java.util.Arrays;
import java.util.List;

public class Mission_1_StepDefs {
    @Given("Sort the following elements according to length of elements")
    public void sort_the_following_elements_according_to_length_of_elements(List<String> list) {

        //converting list to array
       String [] arr = list.toArray(new String[list.size()]);

       //sorting array according to_length of elements
        for (int i = 0; i < arr.length; i++) {
            for(int j = i; j<arr.length;j++){
                if(arr[i].length()>=arr[j].length()){
                    String str="";
                    str=arr[i];
                    arr[i]=arr[j];
                    arr[j]=str;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }

}
