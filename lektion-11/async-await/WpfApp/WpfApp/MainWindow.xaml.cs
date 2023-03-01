using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void BtnBlockingCode_Click(object sender, RoutedEventArgs e)
        {
            tblockStatus.Text = "";
            tblockStatus.Text += "Downloading...\n";
            for (uint i = 0; i < uint.MaxValue; i++) { }

            tblockStatus.Text += "Installing...\n";
            for (uint i = 0; i < uint.MaxValue; i++) { }

            tblockStatus.Text += "Installing finished";
        }

        private async void BtnNonBlockingCode_Click(object sender, RoutedEventArgs e)
        {
            tblockStatus.Text = await DoWorkAsync();
        }

        private async Task<string> DoWorkAsync()
        {
            tblockStatus.Text = "";
            tblockStatus.Text += "Downloading...\n";
            await Task.Run(() =>
            {
                for (uint i = 0; i < uint.MaxValue; i++) { }
            });

            tblockStatus.Text += "Installing...\n";
            await Task.Run(() =>
            {
                for (uint i = 0; i < uint.MaxValue; i++) { }
            });

            tblockStatus.Text += "Installing finished";




            var data = GetDataAsync();
            var unpacked = await data;


            return "Nu är allt klart";

        }


        private async Task<string> GetDataAsync()
        {
            using var http = new HttpClient();
            var res = await http.GetAsync("https://domain.com/api/users");
            var data = await res.Content.ReadAsStringAsync();

            return data;
        }
    }
}
