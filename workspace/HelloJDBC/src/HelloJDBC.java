import java.io.InputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
11112223333
import org.omg.CORBA_2_3.portable.OutputStream;

import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class HelloJDBC {

	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static  String URL = "jdbc:mysql://127.0.0.1:3306/firstdb";
	static final String USER = "root";
	static final String PASSWORD = "1234";
	
	public static void helloWord()throws ClassNotFoundException
	{
		
		Connection conn = null;
		Statement stmt = null;
		PreparedStatement ptmt = null;
		ResultSet rs = null;
		
	/*	//装载驱动程序
		Class.forName(JDBC_DRIVER);
		//建立数据库连接
		try {
			URL = URL + "?userCursorFetch = true";

			conn = DriverManager.getConnection(URL, USER, PASSWORD);
			//stmt = conn.createStatement();
			ptmt = conn.prepareStatement("select userName from user");
			ptmt.setFetchSize(1);
		
		//执行sql语句
			//rs = stmt.executeQuery("select userName from user");
			rs = ptmt.executeQuery();
		//获取执行结果
			while(rs.next()){
				System.out.println("hello" + rs.getString("userName"));
				//流方式读取大数据记录
/*				InputStream in = rs.getBinaryStream("blog");
//				File f = new File(FILE_URL);
//				OutputStream out = null;
//				out = new FileOutputStream(f);
//				int temp = 0;
//				while((temp = in.read())!=-1){
//					out.write(temp);
//				}
//				in.close();
				out.close();
*/				
//			}
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		
//		}finally{
//		//清理环境
//			try {
//					if(conn != null)
//						conn.close();
//					if(stmt != null)
//						stmt.close();
//					if(rs != null)
//						rs.close();
//				} catch (SQLException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//		}
		
//		Connection conn = null;
//		Statement stmt = null;
//		ResultSet rs = null;
//		
//		//装载驱动程序
//		Class.forName(JDBC_DRIVER);
//		//建立数据库连接
//		try {
//			conn = DriverManager.getConnection(URL, USER, PASSWORD);
//			stmt = conn.createStatement();
//		//执行sql语句
//			rs = stmt.executeQuery("select userName from user");
//		//获取执行结果
//			while(rs.next()){
//				System.out.println("hello" + rs.getString("userName"));
//			}
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		
//		}finally{
//		//清理环境
//			try {
//					if(conn != null)
//						conn.close();
//					if(stmt != null)
//						stmt.close();
//					if(rs != null)
//						rs.close();
//				} catch (SQLException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//		}
//		
	
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			helloWord();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}


