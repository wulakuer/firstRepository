import java.util.Scanner;

public class SuShu {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		boolean isPrime = true;
		/*@SuppressWarnings("resource")
		Scanner in = new Scanner(System.in);
		int n = in.nextInt();
		*/
		
		//�ж�n�ǲ�������
		/*for(int i = 2; i< n; i++)
		{
			if(n%i == 0)
			{
				isPrime = false;
				break;				
			}		
		}
		if(isPrime)
			System.out.println(n + "������");
		else
			System.out.println(n + "��������");
		*/
		
		//�ж�n�ǲ�������---�Ľ� 1��ż�����������������޳�����
		/*if(n ==1 || n%2 == 0&& n != 2)
		{
			isPrime = false;
		}
		else
		{
			//for(int i = 3; i<n; i+=2)
			for(int i = 3; i<Math.sqrt(n); i+=2)//����ѧ�ϣ�ֻ��Ҫ������������ƽ����
			{
				if( n%i == 0)
				{
					isPrime = false;
					break;
				}
			}
			
		}
		
		if(isPrime)
			System.out.println(n + "������");
		else
			System.out.println(n + "��������");
		*/
		
		//����ǰ50������---�������е��������ܱ���֪�����������Ĳ�������
		/*int[] Primes = new int[50];
		Primes[0] = 2;
		int cnt = 1;
		MAIN_LOOP:
		for(int x = 3; cnt<50;x++)
		{
			for(int i=0; i<cnt; i++)
			{
				if( x%Primes[i]==0 )
				{
					isPrime=false;
					continue MAIN_LOOP;
				}
			}
			Primes[cnt]=x;
			cnt++;	
		}
		for(int k : Primes)
		{
			System.out.print(k + " ");
		}	*/
	
	
	//����n���ڵ�����---�����ı�������������
	Scanner in = new Scanner(System.in);
	int n = in.nextInt();
	boolean[] Prime = new boolean[n];
	
	for(int i=0; i<Prime.length; i++)
	{
		Prime[i] = true;
	}
	
	for( int x=2; x<Prime.length ;x++)
	{
		for(int i=2; x*i<Prime.length; i++)
		{
			Prime[x*i] = false;
		}
	}
	
	for(int i=2; i<Prime.length; i++)
	{
		if(Prime[i])
			System.out.print(i + " ");
	}
	System.getProperty("user.home");
	}
	
}
