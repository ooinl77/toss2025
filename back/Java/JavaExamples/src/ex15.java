public class ex15 {
    public static void main(String[] args) {
        // 이중반복문
        // 일차반복문 = 일차배열
        // 이중반복문 = 이차배열
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.println( i + "," + j );
            }
        }
        int[][] nums = { {1, 2}, {3, 4} };
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.println( nums[i][j] );
            }
        }

        //별찍기
        //*****
        //*****
        //*****
        //*****
        //*****
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        //출력 예)
        //    *     공백 4 별 1
        //   **     공백 3 별 2
        //  ***     공백 2 별 3
        // ****     공백 1 별 4
        //*****     공백 0 별 5
        //출력 예)
        //*******
        //*    **
        //*   * *
        //*  *  *
        //* *   *
        //**    *
        //*******
    }
}