#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int findLongBand(vector <int> vec){
    unordered_set <int> s;
    int maxi=0;
for(auto i:vec){
    s.insert(i);
}
for(auto element:s){
    int parent=element-1; 
    if(s.find(parent)==s.end()){
        int count=0;
        while(s.find(element)!=s.end()){
            count++;
            element++;
        }
        maxi=max(maxi,count);
    }
}
    
 return maxi;   
}
int main() {
vector <int> vec{1,9,3,0,18,5,2,4,10,7,12,6};
cout<<findLongBand(vec)<<endl;
    return 0;
}