#include <iostream>
#include <vector>
using namespace std;

int mountains(vector <int> vec){
        int maxi=0;
    for(int i =1;i <= vec.size()-2;){
        if(vec[i] > vec[i-1] && vec[i] > vec[i+1]){
            int count=0;
            int j=i;
            while(j > 0 && vec[j] > vec[j-1]){
                count++;
               j--;
            }
            while(i <= vec.size()-2 && vec[i] > vec[i+1]){
                count++;
               i++;
            }
            maxi=max(maxi,count);
            // i=j+1;
        // cout <<"j="<<j<<" vec="<< vec[i]<<"="<<count<<endl;
        }
        else{
            i++;
        }
    }
    return maxi+1;   
};
int main() {
    vector <int> m{5,6,1,2,3,4,5,4,3,2,0,1,2,3,-2,4};
     cout<<mountains(m);
    return 0;
}