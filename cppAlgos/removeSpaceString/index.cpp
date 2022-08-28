// Online C++ compiler to run C++ program online
#include <iostream>
#include <string.h>
#include <cstring>
using namespace std;


void removeSpace(char *str){
    int space=0;
    for(int i=0;str[i]!='\0';i++){
        if(str[i]==' '){
            space++;
        }
    }
    int tot=space*2+strlen(str);
     str[tot]='\0';
    cout<<strlen(str)<<endl;
    for(int i=strlen(str)-1;i>=0;i--){
        if(str[i]==' '){
            str[tot-1]='0';
            str[tot-2]='2';
            str[tot-3]='%';
            tot=tot-3;
        } 
        else{
        str[tot-1]=str[i];
        tot--;
        }
       
    }

    // int n=strlen(str);
    cout<<space<<endl;
    
}

int main() {
 
 char s[1000]={'h','e','l','l','o',' ','w','o','r','l','d'};
 
 removeSpace(s);
 cout<<s<<endl;
    return 0;
}