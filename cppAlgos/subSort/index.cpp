#include <iostream>
#include <vector>
#include <climits>
using namespace std;
 subSort(vector <int> vec){
    int minimum=INT_MAX;
    int maximum=INT_MIN;
    for(int i=0;i<vec.size();i++){
        if(i==0 && vec[1]<vec[i]){
            //use function will be good ....
            minimum=min(minimum,vec[i]);
            maximum=max(maximum,vec[i]);
            continue;
        }
        if(i==vec.size()-1 && vec[i]<vec[i-1]){
            cout<<"zzz"<<vec[i]<<endl;
            minimum=min(minimum,vec[i]);
            maximum=max(maximum,vec[i]);
             continue;

        }
         if(vec[i+1] && vec[i+1] < vec[i]){
            minimum=min(minimum,vec[i]);
            maximum=max(maximum,vec[i]);
        }
        if(vec[i]< vec[i-1]){
            minimum=min(minimum,vec[i]);
            maximum=max(maximum,vec[i]);   
            }   
    }
    // cout<<minimum<<"xx"<<maximum<<endl;
    int inserter=0;
    while(minimum >=vec[inserter]){
        inserter++;
    }
    int inserter2=vec.size()-1;
    while(maximum <=vec[inserter2]){
        inserter2--;
    }
    cout<<inserter<<"xx"<<inserter2<<endl;
    //or return pair or array whatever....
    return inserter;
}
int main() {
  vector <int> vec{1,2,3,4,5,8,6,7,9,10,11};
  cout<<subSort(vec)<<endl;
    return 0;
}