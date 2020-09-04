#include<iostream>
using namespace std;
void haNoiTower(int n , char a, char b, char c ){
    if(n==1){
        cout<<"\t"<<a<<"->"<<c<<endl;
        return;
    }
    cout<<"a=" << a << "b=" << b << "c=" << c <<endl;
    haNoiTower(n-1,a,c,b);
    haNoiTower(1,a,b,c);
    haNoiTower(n-1,b,a,c);
    }
int main(){
    char a='A', b='B', c='C';
    int n;
    cout<<"Nhap n: ";
    cin>>n;
    haNoiTower(n,a,b,c);
    system("pause");
    return 0;
}