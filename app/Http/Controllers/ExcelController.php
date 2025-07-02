<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\ReportExport;
use Maatwebsite\Excel\Facades\Excel;

class ExcelController extends Controller
{
    public function downloadToday()
    {
        $fileName = 'reports_today.xlsx';
        return Excel::download(new ReportExport('today'), $fileName);
    }

    public function downloadThisWeek()
    {
        $fileName = 'reports_this_week.xlsx';
        return Excel::download(new ReportExport('this_week'), $fileName);
    }

    public function downloadThisMonth()
    {
        $fileName = 'reports_this_month.xlsx';
        return Excel::download(new ReportExport('this_month'), $fileName);
    }

    public function downloadAll()
    {
        $fileName = 'reports_all.xlsx';
        return Excel::download(new ReportExport('all'), $fileName);
    }
}
