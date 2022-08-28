// Online C++ compiler to run C++ program online
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int MinSwap(vector <int> vec){
    int n=vec.size();
    int ans=0;
    vector <bool> visited(n,false);
    pair<int, int> pa[n];
    for(int i=0;i<n;i++){
        pa[i].first=vec[i];
        pa[i].second=i;
    }
    sort(pa,pa+n);
    for(int i=0;i<n;i++){ 
    int old_position=pa[i].second;
    if(visited[i]==true or old_position==1 ){
        continue;
    }    
    int node=i;
    int cycle=0;
    while(!(visited[node])){
        visited[node]=true;
        int next_node=pa[node].second;
        node=next_node;
        cycle+=1;
    }
    ans+=cycle-1;
    }
    return ans;
}

int main() {
    vector <int> vec{2,4,5,1,3};
cout<<MinSwap(vec)<<endl;
    return 0;
}