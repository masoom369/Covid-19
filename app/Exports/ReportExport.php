<?php

namespace App\Exports;

use App\Models\Appointment;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;

class ReportExport implements FromQuery
{
    use Exportable;

    protected $period;

    public function __construct($period)
    {
        $this->period = $period;
    }

    public function query()
    {
        $query = Appointment::query();

        switch ($this->period) {
            case 'today':
                $query->whereDate('created_at', today());
                break;
            case 'this_week':
                $query->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()]);
                break;
            case 'this_month':
                $query->whereYear('created_at', now()->year)
                      ->whereMonth('created_at', now()->month);
                break;
            // 'all' case doesn't require filtering
        }

        return $query;
    }
}
